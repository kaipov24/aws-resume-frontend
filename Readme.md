# 🌍 AWS Resume Frontend

This repository contains the **frontend** for my personal resume website — a fully serverless, secure, and scalable static site hosted on **Amazon S3**, distributed globally with **Amazon CloudFront**, and integrated with a real-time **visitor counter** powered by AWS Lambda, API Gateway, and DynamoDB.

Backend branch
[Backend branch](https://github.com/kaipov24/aws-resume-backend)
---

## 🧩 Architecture Overview

| Component | Service | Description |
|------------|----------|--------------|
| 🖥️ **Frontend** | Amazon S3 | Hosts static HTML, CSS, and JavaScript |
| 🌐 **CDN + HTTPS** | CloudFront + AWS Certificate Manager | Global edge delivery with SSL/TLS |
| ⚙️ **API** | API Gateway | Public endpoint for visitor counter |
| 🧠 **Logic Layer** | AWS Lambda (Python) | Handles unique-IP tracking and increments DynamoDB |
| 💾 **Database** | DynamoDB | Persists visitor counts |

---

## 🚀 Features

- Serverless static website with global CDN
- HTTPS via AWS ACM and CloudFront
- Real-time visitor counter (unique IP tracking)
- Zero servers to manage
- Infrastructure managed via Terraform
- Low-cost, free-tier friendly setup