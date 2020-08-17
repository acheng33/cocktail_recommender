import os
from dotenv import load_dotenv
import pymongo
from flask import Flask

load_dotenv()
database_url = os.environ.get("CONNECTION_URL")

client = pymongo.MongoClient(database_url)
db = client.cocktails

cocktails = db.cocktails
ingredients = db.ingredients

app = Flask(__name__)

@app.route("/", methods = ["GET"])
def print_all_cocktails():
    data = list(cocktails.find({}, {"_id" : 0}))
    for cocktail in data:
        for ingredient in cocktail.get("ingredients"):
            print(ingredient)
            ingredient["ingredient"] = ingredients.find_one({"_id" : ingredient["ingredient"]}, {"_id" : 0})
    return {"cocktails" : data}
    