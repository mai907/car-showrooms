---

# Car Showroom - Angular 19 Project

## Project Overview
 is a web application built using **Angular 19**. It provides an interface to browse, manage, and administer car showrooms.
The app includes **authentication with role-based access**, secure routes, and connects to a backend API for data management.

---

## Project Structure

```
C:.
|   index.html
|   main.server.ts
|   main.ts
|   server.ts
|   structure.txt
|   styles.css
|   
+---app
|   |   app.component.css
|   |   app.component.html
|   |   app.component.spec.ts
|   |   app.component.ts
|   |   app.config.server.ts
|   |   app.config.ts
|   |   app.routes.server.ts
|   |   app.routes.ts
|   |   
|   +---interceptors
|   |       auth.interceptor.spec.ts
|   |       auth.interceptor.ts
|   |       
|   +---pages
|   |   +---car
|   |   |   +---car-create
|   |   |   |       car-create.component.css
|   |   |   |       car-create.component.html
|   |   |   |       car-create.component.spec.ts
|   |   |   |       car-create.component.ts
|   |   |   |       
|   |   |   \---car-list
|   |   |           car-list.component.css
|   |   |           car-list.component.html
|   |   |           car-list.component.spec.ts
|   |   |           car-list.component.ts
|   |   |           
|   |   +---home
|   |   |       home.component.css
|   |   |       home.component.html
|   |   |       home.component.spec.ts
|   |   |       home.component.ts
|   |   |       
|   |   +---login
|   |   |       login.component.css
|   |   |       login.component.html
|   |   |       login.component.spec.ts
|   |   |       login.component.ts
|   |   |       
|   |   +---page-not-found
|   |   |       page-not-found.component.css
|   |   |       page-not-found.component.html
|   |   |       page-not-found.component.spec.ts
|   |   |       page-not-found.component.ts
|   |   |       
|   |   +---showroom
|   |   |   +---showroom-create
|   |   |   |       showroom-create.component.css
|   |   |   |       showroom-create.component.html
|   |   |   |       showroom-create.component.spec.ts
|   |   |   |       showroom-create.component.ts
|   |   |   |       
|   |   |   +---showroom-details
|   |   |   |       showroom-details.component.css
|   |   |   |       showroom-details.component.html
|   |   |   |       showroom-details.component.spec.ts
|   |   |   |       showroom-details.component.ts
|   |   |   |       
|   |   |   +---showroom-list
|   |   |   |       showroom-list.component.css
|   |   |   |       showroom-list.component.html
|   |   |   |       showroom-list.component.spec.ts
|   |   |   |       showroom-list.component.ts
|   |   |   |       
|   |   |   \---showroom-update
|   |   |           showroom-update.component.css
|   |   |           showroom-update.component.html
|   |   |           showroom-update.component.spec.ts
|   |   |           showroom-update.component.ts
|   |   |           
|   |   \---unauthorized
|   |           unauthorized.component.css
|   |           unauthorized.component.html
|   |           unauthorized.component.spec.ts
|   |           unauthorized.component.ts
|   |           
|   +---services
|   |       api.ts
|   |       auth.service.spec.ts
|   |       auth.service.ts
|   |       car.service.spec.ts
|   |       car.service.ts
|   |       role.guard.ts
|   |       showroom.service.spec.ts
|   |       showroom.service.ts
|   |       toast.service.spec.ts
|   |       toast.service.ts
|   |       
|   \---shared
|       +---components
|       |   +---button
|       |   |       button.component.css
|       |   |       button.component.html
|       |   |       button.component.spec.ts
|       |   |       button.component.ts
|       |   |       
|       |   +---error-page
|       |   |       error-page.component.css
|       |   |       error-page.component.html
|       |   |       error-page.component.spec.ts
|       |   |       error-page.component.ts
|       |   |       
|       |   +---filters
|       |   |       filters.component.css
|       |   |       filters.component.html
|       |   |       filters.component.spec.ts
|       |   |       filters.component.ts
|       |   |       
|       |   +---form
|       |   |       form.component.css
|       |   |       form.component.html
|       |   |       form.component.spec.ts
|       |   |       form.component.ts
|       |   |       
|       |   +---list
|       |   |       list.component.css
|       |   |       list.component.html
|       |   |       list.component.spec.ts
|       |   |       list.component.ts
|       |   |       
|       |   +---pagination
|       |   |       pagination.component.css
|       |   |       pagination.component.html
|       |   |       pagination.component.spec.ts
|       |   |       pagination.component.ts
|       |   |       
|       |   \---toast
|       |           toast.component.css
|       |           toast.component.html
|       |           toast.component.spec.ts
|       |           toast.component.ts
|       |           
|       +---layout
|       |   \---header
|       |           header.component.css
|       |           header.component.html
|       |           header.component.spec.ts
|       |           header.component.ts
|       |           
|       \---models
|               car.ts
|               fieldFormConfig.ts
|               showroom.ts
|               
\---assets
    +---icons
    |       car.svg
    |       close-circle-svgrepo-com.svg
    |       delete.svg
    |       edit.svg
    |       filter.svg
    |       filter2.svg
    |       home.svg
    |       list.svg
    |       more.svg
    |       more2.svg
    |       more3.svg
    |       person.svg
    |       search.svg
    |       
    +---images
    |       logo.png
    |       logo1.png
    |       logo2.png
    |       logo3.png
    |       slide1.jpg
    |       slide2.jpg
    |       slide3.jpg
    |       
    \---videos
            carmoving.gif
            home1.mp4
```

---

## Authentication & Role-Based Access

* **Login/Logout:** Uses basic authentication.

* **Role-Based Routing:**

  * Admins can update, create and delete showroom, and create for car showroom.
  * Users and Admins can both read showroom and car lists.

* Unauthorized or invalid route access is redirected to **home or error page**.

---

## Styling & Assets

* **TailwindCSS** is used for modern and responsive styling.
* All static assets (images, videos, fonts) are in the `assets/` folder.
* Components are styled to be reusable and clean (e.g., form, error pages, modals).

---

## Routing

* **Secure routes:** Configured using `RoleGuard`.
* **Wildcard route:** `**` catches invalid URLs and redirects to home .


---

## Running the Project

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm start
```

Navigate to `http://localhost:4200/`.
