pipeline {
    agent any

    environment {
        
        TEST_ENV = 'qa'
        NODE_ENV = 'test'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/beinghumantester/OrangeHRMWebsite-E2E-PW_JS.git'
            }
        }

        stage('Verify Node Environment') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // CI-safe: installs Chromium + required OS deps
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Cucumber Tests') {
            steps {
                bat 'npx cucumber-js'
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: 'reports/**/*',
                                 allowEmptyArchive: true
            }
        }
    }

    post {
        success {
            mail to: 'tryabcdef000@gmail.com',
                 subject: "BUILD SUCCESS: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                 body: """


Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}

Build URL:
${env.BUILD_URL}
"""
        }

        failure {
            mail to: 'tryabcdef000@gmail.com',
                 subject: "BUILD FAILURE: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                 body: """


Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}

Check console output:
${env.BUILD_URL}console
"""
        }
    }
}
