$ErrorActionPreference = "Stop"

# Окрема збірка сайту "Можливості для студентів" з КОРЕНЕМ "/" (для власного домену
# student.rnd-avrora.com.ua). Викладається в окрему папку, НЕ чіпаючи /student/.

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$archivePath = Join-Path $projectRoot "dist-student-domain.tar.gz"
$sshKey = "C:\Users\user\Desktop\server\ssh-key-2026-03-18.key"
$hostName = "ubuntu@158.178.151.156"
$remoteArchive = "/home/ubuntu/site-deploy/dist-student-domain.tar.gz"
$remoteSiteRoot = "/var/www/student-domain-current"

Push-Location $projectRoot
try {
  $env:SITE_BASE = "/"
  $env:BUILD_OUT_DIR = "domain-dist"
  npm.cmd run build

  if (Test-Path -LiteralPath $archivePath) {
    Remove-Item -LiteralPath $archivePath -Force
  }

  tar -czf $archivePath -C domain-dist .

  ssh -i $sshKey -o IdentitiesOnly=yes $hostName "mkdir -p /home/ubuntu/site-deploy"
  scp -q -i $sshKey -o IdentitiesOnly=yes $archivePath "${hostName}:${remoteArchive}"

  ssh -i $sshKey -o IdentitiesOnly=yes $hostName @"
sudo mkdir -p $remoteSiteRoot
sudo rm -rf $remoteSiteRoot/*
sudo tar --warning=no-timestamp -xzf $remoteArchive -C $remoteSiteRoot
sudo find $remoteSiteRoot -type d -exec chmod 755 {} \;
sudo find $remoteSiteRoot -type f -exec chmod 644 {} \;
echo DOMAIN_DEPLOY_OK
"@
}
finally {
  Pop-Location
}
