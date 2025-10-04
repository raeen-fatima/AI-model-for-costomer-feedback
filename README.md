
---

# Customer Feedback Prioritizer

**AI-powered tool** for product teams to analyze customer feedback, prioritize issues, and track sentiment efficiently.

---

## 🚀 Features

* Analyze customer reviews from CSV datasets (e.g., Amazon reviews).
* Classify sentiment as **Positive** or **Negative** using Hugging Face Transformers.
* Categorize feedback into:

  * **High Urgency** – Negative reviews with low rating
  * **High Impact** – Positive reviews with high rating
  * **Medium** – All others
* Generate **visual charts**:

  * Category-wise feedback count
  * Average rating per category
* Export **analyzed CSV** for further backend or dashboard integration.
* Save charts as images for dashboards or reports.

---

## 🛠 Tech Stack

* **Python** – Data processing & AI integration
* **Pandas** – CSV data handling
* **Hugging Face Transformers** – Sentiment analysis (DistilBERT model)
* **Matplotlib & Seaborn** – Charts & visualization
* **Google Colab / Local Python environment** – Run & test the AI workflow

---

## ⚡ Quick Start

1. Clone the repository:

```bash
git clone <repo-url>
cd Customer-Feedback-Prioritizer
```

2. Install dependencies:

```bash
pip install transformers pandas matplotlib seaborn
```

3. Upload your CSV dataset and update the path in the code:

```python
path = "/path/to/your/CSVfile.csv"
```

4. Run the Colab notebook or Python script:

```bash
python feedback_analyzer.py
```

5. Check results:

   * `analyzed_feedback.csv` → contains sentiment & category for each review
   * `category_chart.png` → Category distribution chart
   * `avg_rating_chart.png` → Average rating chart per category

---

## 🧩 Usage

* Use this tool to **prioritize product improvements**.
* Easily integrate the output CSV and images into **dashboards** or **backend apps**.

---

## 📁 Folder Structure

```
Customer-Feedback-Prioritizer/
│
├─ feedback_analyzer.ipynb        # Colab notebook
├─ analyzed_feedback.csv          # Output CSV
├─ category_chart.png             # Category chart
├─ avg_rating_chart.png           # Avg rating chart
└─ README.md                      # Project documentation
```

---

## 👩‍💻 Author

Raeen – AI + Data enthusiast & Full-stack learner

