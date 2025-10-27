# 🧑‍💻 Riot Take-Home Challenge

## 📋 Description

This project is a small Vue 3 application built for the Riot take-home challenge.  
It displays a list of employees in a table, with a filter to show all, active, or deactivated users.

The goal of this implementation was to focus on **clarity, component structure, and clean data flow**, following a modular and scalable approach.


## 🧠 Features

- **Composable logic** with `useEmployees` for fetching and filtering employees.  
- **Reusable UI components** (`Table`, `TableBody`, `TableCell`, `TableHeader`, `TableHeaderCell`,`TableRow`, `BaseSelect`).
- **Filtering** between _All_, _Active_, and _Deactivated_ employees.
- **Avatar fallback** with initials of employee.
- **Error and loading states** handled gracefully.


## ⚙️ Tech Stack

- **Vue 3 (Composition API + TypeScript)**
- **Vite** for fast dev environment
- **Tailwind CSS** (custom Riot design tokens)
- **Local API** via Express server (`/employees` endpoint)


## 🚀 Run Locally

Clone the repo, install dependencies, and start the servers : 
```bash
git clone git@github.com:mariemorisi/riot-frontend-challenge.git
cd riot-frontend-challenge
pnpm install
pnpm server:start
pnpm dev
```
Visit 👉 http://localhost:5174

## 💭 Notes

- **Each UI component is isolated, reusable, and typed.**
- **The project follows Conventional Commits (feat(ui): …, chore(api): …).**
- **Styling relies on the provided Riot Tailwind theme for consistent typography and colors.**

## 🙏 Thank you for reviewing my take-home!

It was a real pleasure to build this challenge ! I hope you’ll enjoy exploring the code as much as I enjoyed creating it 
