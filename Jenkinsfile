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
                checkout([
                  $class: 'GitSCM',
                  branches: [[name: '*/main']],
                  userRemoteConfigs: [[
                    url: 'https://github.com/codewithkathir/insite-tech-digital.git'
                    // 👉 If private repo, add:
                    // credentialsId: 'github-token'
                  ]],
                  extensions: [[$class: 'CleanBeforeCheckout']]
                ])
            }
        }

        stage('Verify Latest Commit') {
            steps {
                sh 'git log -1'
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

        stage('Deploy') {
            steps {
                sh '''
                export NVM_DIR="$NVM_DIR"
                . "$NVM_DIR/nvm.sh"
                nvm use $NODE_VERSION

                # 🔥 REMOVE OLD APP COMPLETELY
                rm -rf $APP_DIR

                mkdir -p $APP_DIR

                # ✅ COPY NEW CODE
                rsync -av --delete \
                  --exclude node_modules \
                  --exclude .git \
                  ./ $APP_DIR/

                cd $APP_DIR

                # ✅ INSTALL + BUILD (on server)
                npm install
                npm run build

                # ✅ CLEAN PM2 RESTART
                pm2 delete $APP_NAME || true
                pm2 start npm --name "$APP_NAME" -- start

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
