pipeline {
    agent any

    environment {
        APP_DIR = "/var/www/insights/insite-tech-digital"
        NODE_VERSION = "20"
        NVM_DIR = "/var/lib/jenkins/.nvm"
        APP_NAME = "insite-tech-app"
    }

    stages {

        stage('Cleanup Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/codewithkathir/insight-tech-digital.git'
            }
        }

        stage('Setup Node') {
            steps {
                sh '''
                export NVM_DIR="$NVM_DIR"

                if [ ! -d "$NVM_DIR" ]; then
                  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
                fi

                . "$NVM_DIR/nvm.sh"

                nvm install $NODE_VERSION
                nvm use $NODE_VERSION

                node -v
                npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                export NVM_DIR="$NVM_DIR"
                . "$NVM_DIR/nvm.sh"
                nvm use $NODE_VERSION

                npm install
                '''
            }
        }

        stage('Build Next.js App') {
            steps {
                sh '''
                export NVM_DIR="$NVM_DIR"
                . "$NVM_DIR/nvm.sh"
                nvm use $NODE_VERSION

                npm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                export NVM_DIR="$NVM_DIR"
                . "$NVM_DIR/nvm.sh"
                nvm use $NODE_VERSION

                # Ensure target directory exists
                mkdir -p $APP_DIR

                # Copy build safely (no node_modules copy)
                rsync -av --delete \
                  --exclude node_modules \
                  --exclude .git \
                  --exclude .next \
                  ./ $APP_DIR/

                cd $APP_DIR

                # Install production deps only
                npm install --production

                # Start / Restart with PM2
                if pm2 describe $APP_NAME > /dev/null; then
                    pm2 restart $APP_NAME
                else
                    pm2 start npm --name "$APP_NAME" -- start
                fi

                pm2 save
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment Successful"
        }
        failure {
            echo "❌ Deployment Failed"
        }
    }
}
