# Suggested Portfolio Projects

These are project ideas that showcase the **intersection of pharmacy, epidemiology, and data science**. Each project demonstrates a different skill and would strengthen the portfolio. Work on them when ready and add to `src/data/projects.json`.

---

## 🔬 Pharmacovigilance & Drug Safety

### 1. Adverse Drug Reaction (ADR) Signal Detection
- **What**: Analyze FDA FAERS (or WHO VigiBase) data to detect safety signals for a drug class (e.g., NSAIDs, statins, or antibiotics)
- **Skills shown**: Disproportionality analysis (PRR, ROR), SQL/Python, pharmacovigilance domain expertise
- **Data source**: [FDA FAERS](https://www.fda.gov/drugs/surveillance/questions-and-answers-fdas-adverse-event-reporting-system-faers)
- **Category**: `analysis`

### 2. Drug Interaction Network Analysis
- **What**: Build a network graph of drug-drug interactions from DrugBank or openFDA, identify high-risk polypharmacy combinations
- **Skills shown**: Network analysis, graph visualization, pharmacy knowledge
- **Data source**: [DrugBank](https://go.drugbank.com/), [openFDA](https://open.fda.gov/)
- **Category**: `analysis`

---

## 📊 Epidemiology & Public Health

### 3. Disease Outbreak Prediction Dashboard
- **What**: Build an interactive dashboard predicting outbreak risks (e.g., malaria, cholera, or Lassa fever in Nigeria) using weather, population, and historical case data
- **Skills shown**: Time series forecasting, geospatial analysis, R/Python, Power BI
- **Data source**: [Nigeria CDC (NCDC)](https://ncdc.gov.ng/), [WHO](https://www.who.int/data), weather APIs
- **Category**: `viz`

### 4. COVID-19 Vaccination Coverage & Equity Analysis
- **What**: Analyze vaccination rates across Nigerian states or African countries, correlate with health infrastructure and socioeconomic factors
- **Skills shown**: Geospatial visualization, regression analysis, public health equity lens
- **Data source**: [Our World in Data](https://ourworldindata.org/covid-vaccinations), [WHO AFRO](https://www.afro.who.int/)
- **Category**: `analysis`

### 5. Survival Analysis of Cancer Treatment Outcomes
- **What**: Apply Kaplan-Meier and Cox proportional hazard models to a clinical dataset (e.g., SEER or TCGA)
- **Skills shown**: Biostatistics, survival analysis, R/lifelines (Python), clinical data interpretation
- **Data source**: [SEER](https://seer.cancer.gov/), [TCGA](https://portal.gdc.cancer.gov/)
- **Category**: `ml`

---

## 🤖 Machine Learning for Health

### 6. Predicting Hospital Readmission Risk
- **What**: Build a classifier predicting 30-day readmission for diabetic patients using the UCI Diabetes 130-US Hospitals dataset
- **Skills shown**: Classification (XGBoost, Random Forest), feature engineering, clinical feature interpretation
- **Data source**: [UCI ML Repository - Diabetes 130](https://archive.ics.uci.edu/dataset/296/diabetes+130+us+hospitals+for+years+1999+2008)
- **Category**: `ml`

### 7. Antimicrobial Resistance (AMR) Prediction
- **What**: Use ML to predict antibiotic resistance patterns from lab data, inform empirical therapy choices
- **Skills shown**: Multi-class classification, pharmacy/microbiology domain knowledge, public health impact
- **Data source**: [ATLAS (Pfizer)](https://atlas-surveillance.com/), [GLASS (WHO)](https://www.who.int/initiatives/glass)
- **Category**: `ml`

### 8. NLP-Based Adverse Event Extraction from Clinical Notes
- **What**: Apply NLP (spaCy/transformers) to extract adverse drug events from synthetic or publicly available clinical text
- **Skills shown**: NLP, named entity recognition, pharmacovigilance automation
- **Data source**: [n2c2/i2b2 datasets](https://portal.dbmi.hms.harvard.edu/projects/n2c2-nlp/), synthetic clinical notes
- **Category**: `ml`

---

## 📈 Data Visualization & Dashboards

### 9. Nigeria Health Infrastructure Mapping Dashboard
- **What**: Interactive map of healthcare facilities, pharmacies, and disease burden across Nigeria's 36 states + FCT
- **Skills shown**: Geospatial viz (Folium/Mapbox), Power BI, public health data storytelling
- **Data source**: [grid3.org](https://grid3.org/), [HDX](https://data.humdata.org/)
- **Category**: `viz`

### 10. Pharmaceutical Supply Chain Analytics
- **What**: Dashboard tracking drug stockout rates, distribution efficiency, and demand forecasting for essential medicines
- **Skills shown**: Supply chain analytics, time series, pharmacy operations knowledge
- **Data source**: Simulated or [USAID GHSC data](https://www.ghsupplychain.org/)
- **Category**: `viz`

---

## Priority Order (Suggested)

| # | Project | Impact | Difficulty |
|---|---------|--------|------------|
| 1 | ADR Signal Detection | ⭐⭐⭐⭐⭐ | Medium |
| 3 | Disease Outbreak Dashboard | ⭐⭐⭐⭐⭐ | Medium |
| 6 | Hospital Readmission Prediction | ⭐⭐⭐⭐ | Medium |
| 7 | AMR Prediction | ⭐⭐⭐⭐⭐ | Hard |
| 9 | Nigeria Health Mapping | ⭐⭐⭐⭐ | Medium |
| 4 | Vaccination Coverage Analysis | ⭐⭐⭐⭐ | Easy |
| 5 | Cancer Survival Analysis | ⭐⭐⭐⭐ | Medium |
| 2 | Drug Interaction Network | ⭐⭐⭐ | Medium |
| 8 | NLP Adverse Event Extraction | ⭐⭐⭐⭐ | Hard |
| 10 | Pharma Supply Chain Dashboard | ⭐⭐⭐ | Medium |
