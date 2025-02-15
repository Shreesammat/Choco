const useUpdateNotes = () => {
  const signIn = async (
    url: string,
    data: {
      email: string;
      password: string;
    }
  ) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to sign in");
    }
    console.log(response);
    return response.json();
  };
  return { signIn };
};

export default useUpdateNotes;
