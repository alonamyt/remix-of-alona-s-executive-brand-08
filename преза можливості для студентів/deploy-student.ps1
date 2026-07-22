$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$archivePath = Join-Path $projectRoot "dist-student.tar.gz"
$sshKey = "C:\Users\user\Desktop\server\ssh-key-2026-03-18.key"
$hostName = "ubuntu@158.178.151.156"
$remoteArchive = "/home/ubuntu/site-deploy/dist-student.tar.gz"
$remoteSiteRoot = "/var/www/student-current"

Push-Location $projectRoot
try {
  $env:SITE_BASE = "/student/"
  $env:BUILD_OUT_DIR = "deploy-dist"
  npm.cmd run build

  if (Test-Path -LiteralPath $archivePath) {
    Remove-Item -LiteralPath $archivePath -Force
  }

  tar -czf $archivePath -C deploy-dist .

  ssh -i $sshKey -o IdentitiesOnly=yes $hostName "mkdir -p /home/ubuntu/site-deploy"
  scp -i $sshKey -o IdentitiesOnly=yes $archivePath "${hostName}:${remoteArchive}"

  ssh -i $sshKey -o IdentitiesOnly=yes $hostName @"
sudo mkdir -p $remoteSiteRoot
sudo rm -rf $remoteSiteRoot/*
sudo tar --warning=no-timestamp -xzf $remoteArchive -C $remoteSiteRoot
sudo find $remoteSiteRoot -type d -exec chmod 755 {} \;
sudo find $remoteSiteRoot -type f -exec chmod 644 {} \;
sudo nginx -t
sudo systemctl reload nginx
curl -I -s http://127.0.0.1/student/
"@
}
finally {
  Pop-Location
}
