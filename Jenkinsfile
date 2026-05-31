pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Jatinnrawal/aws-devops-nodejs-project'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t aws-devops-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop nodeapp || true
                docker rm nodeapp || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d -p 3000:3000 \
                --name nodeapp \
                aws-devops-app
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh 'curl http://localhost:3000/health'
            }
        }
    }
}
