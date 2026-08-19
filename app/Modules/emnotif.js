export const sendEmailNotification = async (formData) => {
    try {
      await fetch("/api/sendemail", {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };


  