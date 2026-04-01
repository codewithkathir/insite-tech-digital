pipeline {
    agent any

    environment {
        APP_DIR = "/var/www/projects/insight/insight"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/codewithkathir/insight.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                export PATH=/usr/bin:$PATH
                node -v
                npm -v
                npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                export PATH=/usr/bin:$PATH
                npm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                export PATH=/usr/bin:$PATH

                # Clean old app
                rm -rf $APP_DIR/*

                # Copy new build
                cp -r * $APP_DIR

                cd $APP_DIR

                # Restart or start app
                pm2 restart insight-app || pm2 start npm --name "insight-app" -- start

                pm2 save
                '''
            }
        }
    }
}
