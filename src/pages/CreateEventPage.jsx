import { useState } from "react";
import EventForm from "../components/EventForm";
import {createEvent} from "../services/event-service";

function CreateEventPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    venue: "",
    eventDate: "",
    price: 0,
    capacity: 0,
    status: "DRAFT"
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (file) => {
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append form fields
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      // Append file
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const data = await createEvent(newEvent)
      // const response = await axios.post(
      //   "/api/admin/events",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //       Authorization: "Bearer YOUR_ADMIN_TOKEN"
      //     }
      //   }
      // );

      alert("Event created successfully!");
      // console.log(response.data);

    } catch (error) {
      console.error(error);
      alert("Error creating event");
    }
  };

  return (
    <div>
      <EventForm
        title="Create Event"
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onFileChange={handleFileChange}
      />
    </div>
  );
}

export default CreateEventPage;