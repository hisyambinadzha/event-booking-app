import BookingForm from "../components/BookingForm";

export default function BookingPage() {
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f4f4f4",
                margin: "-40px"
            }}>
                <BookingForm />
            </div>
        </>
    );
}