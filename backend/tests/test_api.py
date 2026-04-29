def test_chat_response():
    response = client.get("/chat/?query=What is voting?")
    assert response.status_code == 200
    assert "voting" in response.json()["response"].lower()
