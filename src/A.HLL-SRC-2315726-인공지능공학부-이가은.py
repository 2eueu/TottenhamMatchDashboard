from flask import Flask, jsonify, render_template
import pandas as pd
from sqlalchemy import create_engine

app = Flask(__name__)

# 데이터베이스 연결
engine = create_engine('mysql+pymysql://root:try1234@localhost/football_db')

df = pd.read_sql("SELECT * FROM tottenham_matches", con=engine)

@app.route('/')
def dashboard():
    return render_template('B.Web-SRC-2315726-인공지능공학부-이가은.html')  

@app.route('/api/matches', methods=['GET'])
def get_matches():
    return jsonify(df.to_dict(orient="records"))

if __name__ == '__main__':
    app.run(debug=True)
