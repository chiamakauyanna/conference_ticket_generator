# Conference Ticket Generator

![Conference Ticket Generator](https://github.com/user-attachments/assets/9c1f3bca-0d82-405f-821f-ae8c217ec8d0)

![Image](https://github.com/user-attachments/assets/e25c1b09-9e73-4ae6-a73d-2854f5dfb034)

## 🚀 About the Project
The **Conference Ticket Generator** is a React-based web application that allows users to register for a conference and generate a free ticket. It includes a multi-step form with validation, file uploads (Cloudinary), and a smooth user experience.

## 🌟 Features
- Multi-step form with validation
- Profile picture upload using **Cloudinary**
- Form data managed with **Formik & Yup**
- Progress bar to track form completion
- Mobile-responsive UI

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS
- **State Management:** React Context API
- **Form Handling:** Formik, Yup
- **File Upload:** Cloudinary API


## 🏗️ Setup & Installation
### Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/chiamakauyanna/conference_ticket_generator
   cd conference-ticket-generator
   cd generateTicket
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## 📌 Environment Variables
Create a `.env` file in the root directory and add:
```sh
REACT_APP_CLOUDINARY_UPLOAD_URL=https://api.cloudinary.com/v1_1/your-cloudinary-id/image/upload
REACT_APP_CLOUDINARY_PRESET=your-upload-preset
```

## 🎯 How It Works
1. User enters their **name** and **email**.
2. User uploads a **profile picture**.
3. Form data is validated and stored.
4. Upon submission, the user moves to the next step.
5. Ticket is generated at the final step.

## 🔥 Live Demo
[Live Link](https://conference-ticket-generator-one-self.vercel.app/)

## 🤝 Contributing
Pull requests are welcome! Feel free to fork the project and submit PRs.

## 📜 License
This project is licensed under the **MIT License**.

---

### 📬 Connect with Me
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/chiamakauyanna/)

Give the repo a ⭐ if you found it useful!

