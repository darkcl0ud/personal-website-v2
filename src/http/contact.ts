export type ContactFormData = {
    name: string;
    email: string;
    message: string;
}

export type ContactFormResponse = {
    success: boolean;
    data: ContactFormData;
    errors: string[];
}

export type ContactFormResponseData = {
    message?: string;
    errors?: string[];
}

export async function contactAction({request}: {request: Request}): Promise<ContactFormResponse> {
    const formData = await request.formData();
    const data = Object.fromEntries(formData) as ContactFormData;
    const response = await fetch("/api/contact-me", {
        method: "POST",
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        return { success: false, data, errors: ["Failed to send email"] };
    }

    const resData: ContactFormResponseData = await response.json();

    if (resData.errors && resData.errors.length > 0) {
        return { success: false, data, errors: resData.errors };
    }

    return { success: true, data, errors: [] };
}