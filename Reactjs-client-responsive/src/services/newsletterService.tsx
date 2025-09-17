export interface NewsletterSignupPayload {
    email: string;
    name?: string;
  }
  
  export interface NewsletterSignupResponse {
    message: string;
    customer_id: number;
  }
  
  export async function signupForNewsletter(
    payload: NewsletterSignupPayload
  ): Promise<NewsletterSignupResponse> {
    const response = await fetch("http://localhost:5000/newsletter-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to sign up for newsletter");
    }
  
    return response.json();
  }
  