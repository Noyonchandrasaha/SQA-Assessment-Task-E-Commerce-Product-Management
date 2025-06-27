**Comprehensive Software Quality Assurance Assessment Project**

*Complete testing suite covering Manual, API, and Automation testing for E-Commerce Product Management*

---

## Project Overview

This project demonstrates comprehensive Software Quality Assurance (SQA) testing methodologies applied to an E-Commerce Product Management system. The assessment encompasses three critical testing approaches:

- **Manual UI Testing** on [AutomationExercise.com](https://automationexercise.com)
- **REST API Testing** using [Fake Store API](https://fakestoreapi.com/docs) 
- **Automated E2E Testing** with Cypress framework
- **Documentation & Reporting** with detailed test plans and bug reports

---

## Table of Contents

- [Project Structure](#project-structure)
- [Test Coverage Overview](#test-coverage-overview)
- [Manual Testing](#manual-testing)
- [API Testing with Postman](#api-testing-with-postman)
- [Automation Testing with Cypress](#automation-testing-with-cypress)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Deliverables](#project-deliverables)
- [Author Information](#author-information)

---

## Project Structure

```
SQA-Assessment-Task-E-Commerce-Product-Management/
├── cypress/
│   └── e2e/
│       ├── AddProductList.cy.js      # Cart Addition Test Scenarios
│       └── DeleteProduct.cy.js       # Cart Removal Test Scenarios
├── docs/
│   ├── Test_Plan.pdf                 # Comprehensive Test Planning
│   ├── Manual_Test_Cases.xlsx        # Manual Testing Documentation
│   ├── Bug_Report.pdf                # Identified Issues & Defects
│   └── Summary_Report.pdf            # Executive Testing Summary
├── api/
│   ├── Postman_Collection.json       # API Test Collection Export
│   └── API_Test_Results_Screenshots/ # Visual API Test Evidence
├── README.md                         # Project Documentation
├── package.json                      # Node.js Dependencies
└── cypress.config.js                 # Cypress Configuration
```

---

## Test Coverage Overview

### Testing Methodology Breakdown

| Testing Type | Tool/Method | Test Cases | Coverage |
|--------------|-------------|------------|----------|
| **Manual Testing** | Excel Documentation | 5 Test Cases | Product CRUD Operations |
| **API Testing** | Postman Collection | 7 Endpoints | Complete API Validation |
| **Automation Testing** | Cypress Framework | 10 Test Scenarios | End-to-End User Flows |

### **Total Test Coverage**: 22 Comprehensive Test Scenarios

---

## Manual Testing

### Scope & Objectives
Manual testing focuses on core product management functionalities to validate user interface behavior and business logic compliance.

### Test Case Coverage

| Test Case ID | Test Scenario |
|--------------|---------------|
| `TS_ANPP_001` | **Add New Product** |
| `TS_VLP_002` | **View Product Listing** | 
| `TS_EP_003` | **Edit Existing Product** | 
| `TS_DP_004` | **Delete Product** | High |
| `TS_SP_005` | **Search/Filter Products** |

**Documentation**: Detailed test cases available in `docs/Manual_Test_Cases.xlsx`

---

## API Testing with Postman

### Testing Framework
Comprehensive REST API validation using Postman collections against [Fake Store API](https://fakestoreapi.com/docs).

### API Endpoints Tested

| HTTP Method | Endpoint | Purpose | Validation Focus |
|-------------|----------|---------|------------------|
| `GET` | `/products` | **Retrieve All Products** | Response structure, data integrity |
| `GET` | `/products/{id}` | **Get Specific Product** | Parameter validation, error handling |
| `POST` | `/carts` | **Create Shopping Cart** | Request payload validation |
| `PUT` | `/carts/{id}` | **Update Cart Contents** | Data persistence, update logic |
| `DELETE` | `/carts/{id}` | **Remove Cart** | Deletion confirmation, cleanup |
| `GET` | `/users` | **List All Users** | User data structure validation |
| `POST` | `/auth/login` | **User Authentication** | Security, token generation |

### API Test Artifacts
- **Collection Export**: `api/Postman_Collection.json`
- **Test Evidence**: `api/API_Test_Results_Screenshots/`
- **Response Validation**: JSON schema validation included

---

## Automation Testing with Cypress

### Framework Overview
End-to-end automation testing using Cypress framework for real-world user interaction simulation on [AutomationExercise.com](https://automationexercise.com).

### Cart Addition Test Scenarios (`AddProductList.cy.js`)

| Test Case ID | Test Scenario | Validation Criteria |
|--------------|---------------|-------------------|
| `TC_ANP_001` | **Single Product Addition** | Product successfully added to cart |
| `TC_ANP_002` | **Third Product Selection** | Specific product targeting accuracy |
| `TC_ANP_003` | **Multiple Product Addition** | Cart handles multiple distinct items |
| `TC_ANP_004` | **Detail View Addition** | Product detail page functionality |
| `TC_ANP_005` | **Quantity Modification** | Multiple quantities of same product |
| `TC_ANP_006` | **Cross-Page Persistence** | Cart maintains items across navigation |
| `TC_ANP_007` | **Recommended Items** | Bottom-section recommendation functionality |
| `TC_ANP_008` | **Guest User Addition** | Cart works without authentication |

### Cart Removal Test Scenarios (`DeleteProduct.cy.js`)

| Test Case ID | Test Scenario | Validation Criteria |
|--------------|---------------|-------------------|
| `TC_DP_022` | **Single Item Removal** | Complete product deletion from cart |
| `TC_DP_023` | **Selective Removal** | Partial removal with item preservation |

### Automation Features
- **Cross-browser compatibility** testing
- **Automatic screenshot capture** for failures
- **Video recording** of test execution
- **Custom commands** for reusable actions

---

## Getting Started

### Prerequisites

**Required Software:**
- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **npm** package manager (included with Node.js)
- **Git** version control (optional)
- **Modern web browser** (Chrome, Firefox, or Edge)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Noyonchandrasaha/SQA-Assessment-Task-E-Commerce-Product-Management.git
   ```

2. **Navigate to project directory**:
   ```bash
   cd SQA-Assessment-Task-E-Commerce-Product-Management
   ```

3. **Install project dependencies**:
   ```bash
   npm install
   ```

4. **Verify installation**:
   ```bash
   npx cypress --version
   ```

---

## Running Tests

### Interactive Test Execution

**Launch Cypress Test Runner**:
```bash
npx cypress open
```

**Steps:**
1. Select your preferred browser
2. Choose test file (e.g., `AddProductList.cy.js`)
3. Watch real-time test execution
4. Review results and screenshots

### Headless Test Execution

**Run all tests in CI/CD mode**:
```bash
npx cypress run
```

**Run specific test suite**:
```bash
npx cypress run --spec "cypress/e2e/AddProductList.cy.js"
```

**Generate detailed reports**:
```bash
npx cypress run --reporter mochawesome
```

---

## Project Deliverables

### Documentation Portfolio

| Deliverable | Status | Description |
|-------------|--------|-------------|
| 📄 `Test_Plan.pdf` | ✅ Complete | Comprehensive test strategy and planning |
| 📊 `Manual_Test_Cases.xlsx` | ✅ Complete | Detailed manual test case documentation |
| 🐛 `Bug_Report.pdf` | ✅ Complete | Identified defects and issue tracking |
| 📈 `Summary_Report.pdf` | ✅ Complete | Executive summary of testing results |

### Technical Deliverables

| Component | Status | Description |
|-----------|--------|-------------|
| 🔧 `Postman_Collection.json` | ✅ Complete | API testing collection export |
| 🤖 `AddProductList.cy.js` | ✅ Complete | Automated cart addition scenarios |
| 🗑️ `DeleteProduct.cy.js` | ✅ Complete | Automated cart removal scenarios |
| 📚 `README.md` | ✅ Complete | Comprehensive project documentation |

---

## Quality Metrics

### Test Execution Summary

| Metric | Value |
|--------|-------|
| **Total Test Cases** | 30 |
| **Manual Test Cases** | 30|
| **API Test Cases** | 7 |
| **Automation Test Cases** | 10 |
| **Code Coverage** | Complete |
| **Browser Compatibility** | 4 browsers |

---

## Author Information

**Project Developer**: Noyon Chandra Saha  
**Professional Role**: QA Engineer | Automation Test Specialist  


### Project Timeline
**Submission Deadline**: June 27, 2025 – 06:00 PM  
**Assessment Type**: Software Quality Assurance Academic Evaluation  

---

## License & Usage

This project is submitted as part of an academic Software Quality Assurance assessment. The codebase and documentation may be utilized for:

- **Educational purposes** and learning resources
- **Portfolio demonstration** of testing capabilities  
- **Reference material** for similar testing projects
- **Open-source contribution** examples

---

**Built with dedication to software quality excellence**

*Comprehensive testing ensures reliable, user-friendly e-commerce experiences*