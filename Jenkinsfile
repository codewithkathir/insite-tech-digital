pipeline {
    agent any

    environment {
        APP_DIR = "/var/www/projects/insight/insight"
        NODE_VERSION = "20"
        NVM_DIR = "/var/lib/jenkins/.nvm"
    }

    stages {

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

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/codewithkathir/insight.git'
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

        stage('Build') {
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

                rm -rf $APP_DIR/*
                cp -r * $APP_DIR

                cd $APP_DIR

                pm2 restart insight-app || pm2 start npm --name "insight-app" -- start
                pm2 save
                '''
            }
        }
    }
}
