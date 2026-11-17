// ---- EDIT YOUR CONTENT HERE ----
const heroChips=["RAG","Hybrid search","LLM evaluation","Prompt testing","FastAPI","LangChain","PostgreSQL","Docker","ETL","Pandas","YOLO","Scikit-learn"];
const focus=[
["01 // RETRIEVAL","RAG and hybrid search","Vector search and BM25 merged with RRF, then cross-encoder reranking, with source pages in answers.",["RAG","BM25","RRF"]],
["02 // EVALUATION","AI evaluation and testing","Controlled test scenarios, expected-versus-actual checks and PASS / PARTIAL PASS / FAIL reports.",["Test design","Hallucinations"]],
["03 // BACKEND","Python AI backends","FastAPI services with PostgreSQL storage, authentication and streaming responses.",["FastAPI","PostgreSQL","Docker"]],
["04 // DATA","Data validation and ETL","Checking production and downtime data from SQL, Excel and CSV sources in Python.",["Pandas","ETL","CDC"]],
["05 // ENTERPRISE","Requirements for AI","Turning business workflows and client needs into requirements for an AI assistant.",["Requirements","Workflows"]],
["06 // AGENTS","LLM apps and agents","Prototypes with Groq and the OpenAI Agents SDK, such as a mock interview agent.",["Groq","Agents SDK"]]];
const projects=[
{g:"work",name:"AI Document Assistant",status:"Ongoing",cls:"Ongoing",desc:"Ask questions about uploaded PDFs and get answers grounded in the source text.",
 pts:["PDF upload and processing, conversation history and follow-up questions","Hybrid search (vector plus BM25) merged with Reciprocal Rank Fusion, then cross-encoder reranking","Streaming responses, source references with page numbers, user authentication","FastAPI backend, PostgreSQL storage, Streamlit front end, Docker setup"],tech:["Python","FastAPI","LangChain","PostgreSQL","RAG"]},
{g:"work",name:"AI Workplace Recommendation System",status:"Testing",cls:"Testing",desc:"My role: testing a system that spots repetitive workplace activity and suggests automation.",
 pts:["Wrote about 50 controlled scenarios: repetitive activity, slow manual workflows, navigation and information hunting","Compared expected and actual recommendations","Found classification and recommendation failures"],tech:["AI evaluation","Test design","Pattern detection"]},
{g:"work",name:"Engage AI: Speaker Recommendation Chatbot",status:"Testing",cls:"Testing",desc:"My role: testing a chatbot that recommends speakers from natural-language requests.",
 pts:["Tested searches, budget and location limits, and multi-turn conversations","Looked for hallucinations, unsupported claims and missing speaker information","Wrote PASS / PARTIAL PASS / FAIL reports"],tech:["LLM evaluation","Prompt testing"]},
{g:"work",name:"TrakSYS MES: ETL Proof of Concept",status:"Proof of concept",cls:"PoC",desc:"Exploring manufacturing execution system data for an ETL pipeline.",
 pts:["Studied MES database structure, historian data and large tables","Validated production and downtime data from Excel and CSV files","Ran data-quality checks in Python and explored change data capture (CDC)"],tech:["Python","Pandas","SQL Server","ETL","CDC"]},
{g:"work",name:"Sandy: Tax Appeal Plus AI Customer Assistant",status:"Requirements",cls:"Requirements",desc:"My role: requirements for an enterprise AI assistant for customers.",
 pts:["Analysed existing business workflows and client requirements","Identified chatbot functions and wrote requirement documents","Looked at authentication and integration with the customer portal"],tech:["Requirements","Enterprise AI"]},
{g:"personal",name:"AI Mock Interview Agent",status:"Prototype",cls:"Prototype",desc:"An agent that runs practice interviews.",pts:["Add what the agent asks and how it gives feedback"],tech:["Python","Groq","OpenAI Agents SDK","FastAPI"]},
{g:"personal",name:"AI English Rephraser",status:"Prototype",cls:"Prototype",desc:"Rewrites selected text into clearer English with a keyboard shortcut.",pts:["Add how the shortcut triggers the rewrite"],tech:["Python","Groq","AutoHotkey"]},
{g:"personal",name:"Computer Vision Applications",status:"Prototype",cls:"Prototype",desc:"Object detection experiments on images and video.",pts:["Add what you detect and how well it works"],tech:["Python","YOLO","OpenCV"]},
{g:"personal",name:"ML Prediction Models",status:"Prototype",cls:"Prototype",desc:"Prediction models built with scikit-learn.",pts:["Add the data and what you predict"],tech:["Python","Scikit-learn"]}];
const skills={"Programming and backend":["Python","SQL","FastAPI","Django","REST APIs"],"Generative AI and RAG":["LLMs","Prompt engineering","Groq","LangChain","Hybrid search","BM25","Reranking"],"Data and databases":["PostgreSQL","Redis","Pandas","ETL","CDC","Data validation"],"ML and vision":["Scikit-learn","YOLO","OpenCV"],"Tools":["Git","Docker","Postman"]};
const faq=[
["What has Jatin built?","He built an AI document assistant (FastAPI, PostgreSQL, hybrid RAG with reranking and streaming answers) and personal projects such as a mock interview agent and an English rephraser."],
["What is his testing experience?","He wrote about 50 controlled scenarios for an AI workplace recommendation system and tested a speaker-recommendation chatbot for hallucinations, with PASS / PARTIAL PASS / FAIL reports."],
["Where does he work?","He joined CS Soft Solutions as an AI Engineer Trainee in August 2026."],
["How do I contact him?","Email jatinminhas17@gmail.com or use the LinkedIn link in the Contact section."]];
