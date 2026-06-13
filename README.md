# Event Booking Application

This is a simple event booking application built using React and Vite. The application allows users to browse and book events. 

## Features

- Browse and search for events by category
- View event details, including date, time, location, and description
- Book events and view booking details
- Edit and delete events (for authenticated users for admin role only)
- Authentication and authorization using JWT tokens

## Installation

1. Clone the repository: `git clone https://github.com/hisyambinadzha/event-booking-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Authentication

The application uses JWT tokens for authentication. To authenticate, users can register or login using the `/auth` endpoint. 

#### Register

To register a new user, send a `POST` request to `/auth/register` with the following JSON payload:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Login

To login, send a `POST` request to `/auth/login` with the following JSON payload:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

The application will respond with a JWT token that should be stored in local storage and sent with subsequent requests.

### Events

#### Browse Events

To browse events, navigate to the homepage. The application will display a list of events, sorted by date. Users can filter events by category using the dropdown menu.

#### View Event Details

To view event details, click on an event card. The application will display the event's date, time, location, description, and other details.

#### Book an Event

To book an event, click on the "Book" button on the event details page. The application will prompt the user to enter their name and email address. Once the booking is submitted, the application will display a confirmation message.

#### Edit an Event

To edit an event, click on the "Edit" button on the event details page. The application will display a form to edit the event's details. Once the form is submitted, the application will update the event details.

#### Delete an Event

To delete an event, click on the "Delete" button on the event details page. The application will prompt the user to confirm the deletion. Once the deletion is confirmed, the application will remove the event from the database.

## Technologies Used

- React
- Vite
- Node.js
- Express
- MongoDB
- JWT
- bcrypt

## Contributing

Contributions are welcome! Please open an issue or pull request if you have any suggestions or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

