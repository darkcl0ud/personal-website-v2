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

    const regexErrors: string[] = []

    if (!data.name.match(/^[a-zA-Z -]{1,64}$/)) {
        regexErrors.push("Name must be 1-64 characters long and can only contain letters, spaces and hyphens");
    }

    if (!data.message.match(/^[a-zA-Z0-9-.,' \n\r]{10,128}$/)) {
        regexErrors.push("Message must be 10-128 characters long and contain only letters, numbers, spaces, and these special characters .,-' (new lines and carriage returns are allowed)");
    }

    if (regexErrors.length > 0) {
        return { success: false, data, errors: regexErrors };
    }

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