# Smart Agriculture Project Overview (kintone)

## Introduction

The **Smart Agriculture** project is an agricultural management system built on the kintone platform, providing ready-made templates and applications to support comprehensive management of agricultural activities from planning, cultivation, harvesting to sales and accounting.

This system is developed by Media Fusion Co.,Ltd. as a social contribution activity, provided free of charge to small and medium-sized agricultural businesses.

## Project Structure

The project is organized into the following main directories:

```
kintone-smart-agriculture/
├── space/              # Template for kintone Space
├── apps/               # kintone applications
├── docs/               # Project documentation
└── README.md           # Main documentation
```

---

## `space/` Directory

### Purpose

The `space` directory contains the **kintone Space template file** (`.sptpl`) that includes all applications in the project. This template file allows you to import the entire kintone Space at once, including all applications and the links (lookups) between them.

### Why Do We Need the Space Template File?

**Problems when importing applications individually:**
- Each application's ZIP template file contains all referenced applications (app references) that it links to
- When importing applications one by one, referenced applications will be imported multiple times, causing **duplication**
- This causes errors and complicates application management

**Solution - Using the Space Template File:**
- The `.sptpl` file contains all project applications in a unified structure
- Import once to create the entire Space with all applications
- Avoids duplication of referenced applications
- Ensures links (lookups) between applications are set up correctly from the start

### Structure

```
space/
├── スマート農業労務会計システム.sptpl    # Space Template file (REQUIRED)
└── source/                              # JavaScript files for portal customization
    ├── jquery_3.3.1_jquery.min.js      # jQuery library
    ├── smart-agri-mobile-portal.js     # Custom script for mobile
    └── smart-agri-pc-portal.js         # Custom script for PC
```

### Usage

#### Step 1: Import Space Template (REQUIRED)

1. Log in to kintone with Admin privileges
2. Go to **Space Management** → **Import Space**
3. Upload the `スマート農業労務会計システム.sptpl` file from the `space/` directory
4. kintone will automatically create a new Space with:
   - All applications in the project (18 applications)
   - Links (lookups) between applications pre-configured
   - Basic Space structure and access permissions

#### Step 2: Customize Portal (Optional)

After importing the Space, you can customize the portal interface by uploading JavaScript files:

1. **Access JavaScript and CSS Customization**
   - Log in to kintone with Admin privileges
   - Go to **kintone Administration** → **JavaScript and CSS Customization**
   - Select the Space imported in Step 1

2. **Configure Scope of customization**
   - Select the scope of application:
     - **"Affect all users"**: Apply to all users (recommended)
     - **"Affect only kintone administrators"**: Apply only to admins
     - **"Disable"**: Disable customization

3. **Upload JavaScript file for PC**
   - In the **"Upload JavaScript file for PC"** section, click **"Add file"**
   - Upload files in the following order (important: must upload in correct order):
     1. `jquery_3.3.1_jquery.min.js` (85 KB) - jQuery library (must be uploaded first)
     2. `smart-agri-pc-portal.js` (6 KB) - Custom script for PC
   - Use up/down arrows to adjust file order if needed
   - Note: File order is very important, jQuery must be loaded before other scripts

4. **Upload JavaScript file for mobile devices**
   - In the **"Upload JavaScript file for mobile devices"** section, click **"Add file"**
   - Upload files in the following order:
     1. `jquery_3.3.1_jquery.min.js` (85 KB) - jQuery library (must be uploaded first)
     2. `smart-agri-mobile-portal.js` (4 KB) - Custom script for Mobile
   - Use up/down arrows to adjust file order if needed

5. **Save configuration**
   - Click **"Save"** to save changes
   - Scripts will be automatically activated and applied to the Space

**Upload structure:**
```
JavaScript and CSS Customization
├── Scope of customization: "Affect all users"
├── Upload JavaScript file for PC
│   ├── 1. jquery_3.3.1_jquery.min.js (85 KB)
│   └── 2. smart-agri-pc-portal.js (6 KB)
└── Upload JavaScript file for mobile devices
    ├── 1. jquery_3.3.1_jquery.min.js (85 KB)
    └── 2. smart-agri-mobile-portal.js (4 KB)
```

These JavaScript files provide a professional portal interface, optimized for both mobile devices and computers, helping users easily access and use applications in the system.

### Important Notes

⚠️ **DO NOT** import individual applications from the `apps/` directory if you want to use the entire system, as this will cause application duplication.

✅ **SHOULD** use the `.sptpl` file to import the entire Space at once, ensuring the system works correctly.

---

## `apps/` Directory

### Purpose

The `apps` directory contains all kintone applications in the project. Each application is organized in a separate directory, including a ZIP template file and a source directory containing the extracted contents.

### Structure

Each application has the following structure:

```
apps/
└── [Application Name]/
    ├── README.md                    # Application documentation
    ├── [Application Name].zip       # ZIP template file to import into kintone
    └── source/                      # Extracted contents of the ZIP file
        ├── template.json            # Main configuration file of the application
        ├── icon                     # Application icon
        ├── signature                # Digital signature
        ├── appicon01, appicon02...  # Custom icons
        ├── appjs01_DESKTOP_1...     # JavaScript files for Desktop
        ├── appjs01_MOBILE_1...      # JavaScript files for Mobile
        └── appjs01_DESKTOP_CSS_1... # Custom CSS files
```

### Application List

The project includes the following applications:

#### 1. **Master Management (マスター管理)**
- **圃場マスター管理** (Field Master Management) - Manage cultivation area information
- **品種マスター管理** (Variety Master Management) - Manage crop varieties
- **商品マスター管理** (Product Master Management) - Manage product catalog
- **作業マスター管理** (Work Master Management) - Manage work types
- **作業者マスター管理** (Worker Master Management) - Manage worker information
- **販売先マスター管理** (Customer Master Management) - Manage customer information
- **休憩マスター管理** (Break Master Management) - Manage break times

#### 2. **Cultivation Management (作付管理)**
- **作付管理** (Cultivation Management) - Manage cultivation plans and actual results
- **作付別人件費配賦** (Labor Cost Allocation by Cultivation) - Calculate and allocate labor costs

#### 3. **Production Management**
- **収穫管理** (Harvest Management) - Record and manage harvest yields
- **選別管理** (Sorting Management) - Manage product sorting process
- **在庫管理** (Inventory Management) - Manage product inventory

#### 4. **Sales Management**
- **見積管理** (Estimate Management) - Manage customer quotes
- **注文管理** (Order Management) - Manage orders
- **出荷・納品** (Shipping & Delivery) - Manage shipping and delivery
- **売上・請求・回収** (Sales, Invoicing & Collection) - Manage sales, invoices and collections

#### 5. **Human Resources Management**
- **計画・勤怠** (Planning & Attendance) - Manage work plans and attendance

### Usage

#### ⚠️ Important Notes on Import

**To import the entire system:**
- ✅ **Use the Space Template file** (`.sptpl`) in the `space/` directory - This is the recommended method
- The `.sptpl` file contains all applications and avoids duplicate app references

**Only import individual applications when:**
- You only need a few specific applications, not the entire system
- You want to customize an application before adding it to the Space

#### Import Individual Applications (if needed)

1. **Using ZIP file**
   - Go to kintone Admin → App Management
   - Select **"Create app"**
   - Select **"Create form template file"**
   - Upload the `[Application Name].zip` file from the application directory
   - kintone will automatically create the application with full configuration
   - ⚠️ Note: May cause duplication of referenced applications

#### Preview Customization Content

- Open the `source/` directory in each application
- View the `template.json` file to understand the data structure
- View JavaScript files to understand custom logic
- View CSS files to understand custom interface

#### Components in the `source/` Directory

- **template.json**: Main configuration file containing all application information including:
  - Form structure (data fields)
  - View configuration (display modes)
  - Workflow configuration (approval processes)
  - Lookup configuration (links between applications)
  - JavaScript files configuration

- **appjs*_DESKTOP_* / appjs*_MOBILE_***: Custom JavaScript files for each screen and device
  - Desktop: Optimized for large screens
  - Mobile: Optimized for mobile devices

- **appjs*_DESKTOP_CSS_***: Custom CSS files to change the interface

- **appicon***: Custom icons for the application

- **icon**: Main application icon

- **signature**: Digital signature to authenticate the application

---

## Key System Features

### 1. Comprehensive Management
- Management from planning to sales
- Integrated human resources and accounting management
- Cost and revenue tracking

### 2. Mobile-Optimized
- Responsive interface for mobile
- Direct data entry from the field
- Real-time data synchronization

### 3. Microsoft 365 Integration
- Data synchronization with SharePoint
- Power BI for analysis
- Integration with other MS365 applications

### 4. Flexible Customization
- All custom source code is available in the `source/` directory
- Easy to edit and extend
- Multi-language support

---

## Getting Started

### System Requirements

- kintone account (Standard Course or higher recommended)
- Microsoft 365 account (if using SharePoint integration features)

### Deployment Process

1. **Import Space Template (REQUIRED)**
   - Use the `スマート農業労務会計システム.sptpl` file in the `space/` directory
   - Import into kintone to create the entire Space with all applications
   - Links (lookups) between applications are pre-configured

2. **Customize Portal (Optional)**
   - Go to **kintone Administration** → **JavaScript and CSS Customization**
   - Select the imported Space
   - Upload JavaScript files from the `space/source/` directory:
     - For PC: `jquery_3.3.1_jquery.min.js` (first), `smart-agri-pc-portal.js` (second)
     - For Mobile: `jquery_3.3.1_jquery.min.js` (first), `smart-agri-mobile-portal.js` (second)
   - Save configuration to activate the custom portal

3. **Additional Configuration**
   - Set access permissions for each application
   - Configure workflow if needed
   - Set up notifications and reminders

4. **Application Customization (Optional)**
   - View files in the `apps/[Application Name]/source/` directory to understand the structure
   - Edit according to specific needs
   - Test and deploy

---

## Important Notes

### About Space Template File (.sptpl)

- **`.sptpl` file**: Space template file containing all project applications
  - **Recommended for use** to import the entire system at once
  - Avoids duplication of referenced applications (app references)
  - Ensures links (lookups) between applications are set up correctly
  - Located in the `space/` directory

### About ZIP Files and source Directory

- **ZIP file**: Used to import individual applications into kintone
  - Should only be used when importing a few specific applications
  - May cause duplicate app references if importing multiple linked applications
  - Suitable for users who want to customize each application before adding to the Space

- **source directory**: Contains all extracted content, allowing:
  - Preview all customization files
  - Understand the application structure and logic
  - Edit and customize as needed
  - Learn how to customize kintone

### About License

- The project is provided free of charge for agricultural purposes
- Requires acknowledgment "Powered by Media Fusion Co.,Ltd."
- Permission required before commercial use or redistribution

---

## References

- **README.md**: Main project documentation (Japanese/English)
- **apps/[Application Name]/README.md**: Detailed documentation for each application
- **LICENSE.txt**: Terms of use and license

---

## Support

For technical support or deployment consultation, please contact:

**Media Fusion Co.,Ltd.**
- Website: https://www.mediafusion.co.jp/

---

*This document was last updated: 2025-12-24*

