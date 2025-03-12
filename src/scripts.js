
const fetchQuizQuestions = async () => {
    const apiKey = "4zOmabfy1Z25aYeMvttDeKXVBQLaXF5OVw1JWbRQ"; // Замените на свой API-ключ
    const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10?category=JavaScript`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Ошибка при получении данных");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  
  fetchQuizQuestions();