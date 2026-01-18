from fastapi import FastAPI
import os
from huggingface_hub import InferenceClient
from pydantic import BaseModel

app = FastAPI() 
HF_TOKEN = os.environ.get("HF_TOKEN")
client = InferenceClient()


@app.get("/")
def read_root():
    return {"message": "Hello, FastA"}


@app.get("/items/{item_id}")

def read_item(item_id: int, q:str | None = None):
    return {"item_id": item_id, "q":q}



class Input(BaseModel):
    input: str

@app.post('/predict')
def predic_genai(input:Input):
    messages = [
        {"role": "system", "content": "You are a AI assistant."},
         {"role": "user", "content": input.input}
    ]
    response = client.chat_completion(
          model="zai-org/GLM-4.7",
    messages=messages
    )
    return {"Response": response["choices"][0]["message"]["content"]}





