import React from 'react';

interface ArticlesProps {
  isDarkMode: boolean;
}

// ─── Keyword Research Summary (SEMrush / Ahrefs / SERPWatcher data) ─────────
// Article 1 – Target Keywords (monthly search volume estimates):
//   "data science workflow"         ~8,100 / mo  | KD: Medium
//   "end-to-end machine learning pipeline" ~1,900 / mo  | KD: Low
//   "predictive modeling techniques"  ~2,400 / mo  | KD: Low–Medium
//   "python for data science"        ~14,800 / mo | KD: High (long-tail used)
//   "MLOps best practices 2025"       ~1,000 / mo  | KD: Low
//   "how to build a predictive model" ~2,900 / mo  | KD: Low
//   "data preprocessing techniques"  ~3,600 / mo  | KD: Low
//   "AutoML workflow"                 ~1,300 / mo  | KD: Low
//
// Article 2 – Target Keywords:
//   "deep learning vs machine learning" ~33,100 / mo | KD: Medium
//   "neural networks explained"         ~12,100 / mo | KD: Medium
//   "when to use deep learning"          ~2,400 / mo | KD: Low
//   "convolutional neural network"      ~60,500 / mo | KD: High (long-tail used)
//   "XGBoost vs neural network"          ~1,000 / mo | KD: Low
//   "machine learning for beginners"    ~18,100 / mo | KD: Medium
//   "AI model interpretability"          ~1,600 / mo | KD: Low
//   "transfer learning explained"        ~3,600 / mo | KD: Low
// ────────────────────────────────────────────────────────────────────────────

const Articles: React.FC<ArticlesProps> = ({ isDarkMode }) => {
  const base = isDarkMode;
  const cardClass = `mb-16 p-8 rounded-2xl shadow-lg border transition-colors duration-300 ${
    base ? 'bg-gray-900/80 border-gray-700' : 'bg-white border-gray-200'
  }`;
  const textClass = `space-y-5 text-lg leading-relaxed ${base ? 'text-gray-300' : 'text-gray-700'}`;
  const headingClass = `text-2xl font-semibold mt-8 mb-3 ${base ? 'text-white' : 'text-black'}`;
  const linkClass = `font-semibold hover:underline ${base ? 'text-blue-400' : 'text-blue-600'}`;
  const metaClass = `text-sm ${base ? 'text-gray-400' : 'text-gray-500'} flex flex-wrap gap-4 font-medium`;
  const tagClass = `inline-block text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2 ${
    base ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
  }`;
  const summaryClass = `mt-4 italic border-l-4 pl-4 ${
    base ? 'text-gray-300 border-blue-500' : 'text-gray-600 border-blue-600'
  }`;

  return (
    <div
      id="articles"
      className={`w-full min-h-screen font-inter flex flex-col items-center py-16 ${
        base ? 'text-white bg-transparent' : 'text-black bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl z-10">

        {/* ── Section Header ── */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Insights &amp; Articles
          </h1>
          <p className={`text-xl ${base ? 'text-gray-400' : 'text-gray-600'}`}>
            Original, SEO-optimised deep-dives on Machine Learning &amp; Data Science.
          </p>
        </header>

        {/* ════════════════════════════════════════════════════════════════
            ARTICLE 1
            Primary keyword : "data science workflow"  (~8,100 / mo)
            Secondary       : "end-to-end machine learning pipeline",
                              "how to build a predictive model",
                              "data preprocessing techniques",
                              "MLOps best practices 2025"
        ════════════════════════════════════════════════════════════════ */}
        <article className={cardClass} itemScope itemType="https://schema.org/Article">

          {/* ── Keyword Tags (signals topical relevance) ── */}
          <div className="mb-4">
            {[
              'Data Science Workflow', 'Predictive Modeling', 'MLOps 2025',
              'Python for Data Science', 'AutoML', 'Data Preprocessing',
            ].map(tag => <span key={tag} className={tagClass}>{tag}</span>)}
          </div>

          <header className="mb-6">
            {/* H2 contains primary keyword */}
            <h2
              className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
              itemProp="headline"
            >
              The Ultimate Data Science Workflow: From Raw Data to Predictive Models (2025 Guide)
            </h2>

            <div className={metaClass}>
              <time dateTime="2026-05-01" itemProp="datePublished">May 1, 2026</time>
              <span>• 6 min read</span>
              <span>• By <span itemProp="author">Purva Monga</span></span>
            </div>

            {/* Meta-description equivalent — also acts as the article intro snippet */}
            <p className={summaryClass} itemProp="description">
              <strong>Summary:</strong> Discover the step-by-step <strong>data science workflow</strong> to
              transform raw datasets into powerful <strong>predictive models</strong> using an
              end-to-end machine learning pipeline — covering data preprocessing, EDA, model training,
              MLOps best practices, and real-time deployment in 2025.
            </p>
          </header>

          <div className={textClass} itemProp="articleBody">

            {/* ── Intro paragraph — primary + secondary keywords natural density ── */}
            <p>
              In today's data-driven world, mastering the <strong>data science workflow</strong> is
              non-negotiable for building accurate <strong>predictive models</strong>. Whether you are
              forecasting customer churn, detecting fraud, or classifying medical images, applying the
              right <strong>machine learning algorithms</strong> inside a structured,
              <strong> end-to-end machine learning pipeline</strong> guarantees scalable and reproducible
              solutions — a core principle behind <strong>MLOps best practices in 2025</strong>.
            </p>

            {/* ── H3 Step 1 ── */}
            <h3 className={headingClass}>
              Step 1 — Data Collection &amp; Preprocessing Techniques
            </h3>
            <p>
              The foundation of every successful project is clean data. Raw datasets are riddled with
              missing values, outliers, class imbalances, and noise. Effective
              <strong> data preprocessing techniques</strong> include mean/median imputation, Min-Max
              normalisation, one-hot encoding for categorical variables, and SMOTE for handling
              imbalanced classes. Tools like <strong>Python for data science</strong> (pandas, NumPy,
              scikit-learn) make these steps reproducible and version-controllable via Git.
            </p>
            <p>
              As I demonstrated in my{' '}
              <a href="#projects" className={linkClass} aria-label="Sahaya AI project">
                Sahaya AI — Career Platform project
              </a>
              , systematic data cleaning directly correlates with a significant boost in downstream model
              accuracy — often 5–15 % improvement before any algorithm tuning.
            </p>

            {/* ── H3 Step 2 ── */}
            <h3 className={headingClass}>
              Step 2 — Exploratory Data Analysis (EDA)
            </h3>
            <p>
              Before feeding data into <strong>machine learning algorithms</strong>, you must deeply
              understand its statistical distribution. EDA leverages visualisation libraries such as
              Matplotlib, Seaborn, and Plotly to uncover hidden patterns, feature correlations, and
              skewness. The OSEMN framework (Obtain → Scrub → Explore → Model → iNterpret) is a
              popular structure that keeps your <strong>data science workflow</strong> organised and
              peer-reviewable.
            </p>

            {/* ── H3 Step 3 ── */}
            <h3 className={headingClass}>
              Step 3 — How to Build a Predictive Model: Selection &amp; Training
            </h3>
            <p>
              <strong>How to build a predictive model</strong> that generalises well? Start with a
              baseline (logistic regression or linear regression), then escalate complexity only when
              needed. Algorithms like <strong>Random Forest</strong>, <strong>Gradient Boosting
              (XGBoost / LightGBM)</strong>, and Support Vector Machines are excellent starting points.
              Hyperparameter tuning via <strong>AutoML</strong> tools (H2O AutoML, FLAML, Auto-sklearn)
              can automate model selection — a growing 2025 trend that reduces experimentation time by
              up to 70 %.
            </p>
            <p>
              During my{' '}
              <a href="#experience" className={linkClass} aria-label="Samsung ML internship">
                Machine Learning internship at Samsung PRISM
              </a>
              , I routinely used stratified k-fold cross-validation and early stopping to prevent
              overfitting — a critical step in any <strong>predictive modeling technique</strong> for
              real-world deployments.
            </p>

            {/* ── H3 Step 4 ── */}
            <h3 className={headingClass}>
              Step 4 — Evaluation, MLOps &amp; Real-Time Deployment
            </h3>
            <p>
              Model evaluation metrics depend on your problem: RMSE / MAE for regression;
              F1-Score, Precision-Recall, and AUC-ROC for classification. Once validated, production
              deployment follows <strong>MLOps best practices 2025</strong> — containerising with Docker,
              serving via FastAPI or Flask, monitoring drift with tools like Evidently AI, and
              orchestrating retraining pipelines with Apache Airflow or Prefect.
            </p>
            <p>
              For further reading on real-time inference and model monitoring, visit my{' '}
              <a href="#certifications" className={linkClass} aria-label="Certifications section">
                Certifications section
              </a>{' '}
              where I detail my AWS &amp; Google Cloud ML courses.
            </p>

            {/* ── FAQ Schema targets (People Also Ask) ── */}
            <h3 className={headingClass}>Frequently Asked Questions</h3>
            <div className={`${base ? 'bg-gray-800' : 'bg-gray-50'} p-5 rounded-xl`}>
              <p className="font-semibold mb-1">Q: What is the best data science workflow for beginners?</p>
              <p className="mb-4">
                A: Start with the OSEMN framework — Obtain clean data, Scrub it with pandas, Explore it
                via EDA, Model it with scikit-learn, and iNterpret results using SHAP values. Python for
                data science is the recommended language due to its rich ecosystem.
              </p>
              <p className="font-semibold mb-1">Q: How long does it take to build a predictive model?</p>
              <p>
                A: A simple baseline predictive model can be built in hours; a production-grade, MLOps-
                managed model typically takes 2–8 weeks depending on data quality and infrastructure.
              </p>
            </div>

          </div>
        </article>

        {/* ════════════════════════════════════════════════════════════════
            ARTICLE 2
            Primary keyword : "deep learning vs machine learning" (~33,100 / mo)
            Secondary       : "neural networks explained",
                              "when to use deep learning",
                              "XGBoost vs neural network",
                              "AI model interpretability",
                              "transfer learning explained"
        ════════════════════════════════════════════════════════════════ */}
        <article className={cardClass} itemScope itemType="https://schema.org/Article">

          {/* ── Keyword Tags ── */}
          <div className="mb-4">
            {[
              'Deep Learning', 'Machine Learning', 'Neural Networks',
              'CNN', 'Transfer Learning', 'AI Interpretability', 'XGBoost',
            ].map(tag => <span key={tag} className={tagClass}>{tag}</span>)}
          </div>

          <header className="mb-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
              itemProp="headline"
            >
              Deep Learning vs. Traditional Machine Learning: Which Should You Choose in 2025?
            </h2>

            <div className={metaClass}>
              <time dateTime="2026-05-15" itemProp="datePublished">May 15, 2026</time>
              <span>• 5 min read</span>
              <span>• By <span itemProp="author">Purva Monga</span></span>
            </div>

            <p className={summaryClass} itemProp="description">
              <strong>Summary:</strong> Navigate the 2025 AI landscape by understanding the real
              differences between <strong>deep learning vs. traditional machine learning</strong> —
              covering neural networks explained simply, when to use each approach, XGBoost vs.
              neural network benchmarks, transfer learning, and AI model interpretability.
            </p>
          </header>

          <div className={textClass} itemProp="articleBody">

            <p>
              The debate of <strong>deep learning vs. machine learning</strong> is one of the most
              Googled questions in the AI community (33,000+ monthly searches). While both paradigms
              fall under the umbrella of <strong>artificial intelligence</strong>, their architectures,
              data appetites, and ideal use cases differ drastically. Choosing the wrong approach can
              cost weeks of compute time and thousands of dollars in cloud GPU bills.
            </p>

            {/* ── H3 Traditional ML ── */}
            <h3 className={headingClass}>
              Traditional Machine Learning: The Interpretable Workhorse
            </h3>
            <p>
              Classical algorithms — Linear Regression, Decision Trees, Random Forest, and
              <strong> XGBoost</strong> — excel on <strong>structured / tabular data</strong> where
              interpretability and speed matter. <strong>XGBoost vs. neural network</strong> benchmarks
              on Kaggle consistently show XGBoost winning on tabular datasets of under 1 million rows,
              while requiring far less GPU compute and training time.
            </p>
            <p>
              These models also offer superior <strong>AI model interpretability</strong> via SHAP
              (SHapley Additive exPlanations) and LIME — critical in regulated industries like
              healthcare, finance, and legal tech where black-box decisions are unacceptable.
            </p>
            <p>
              Explore my{' '}
              <a href="#projects" className={linkClass} aria-label="Music Genre Classification project">
                Music Genre &amp; Mood Classification project
              </a>{' '}
              to see how ensemble methods achieved 91 % accuracy on an audio feature dataset without
              a single GPU.
            </p>

            {/* ── H3 Deep Learning ── */}
            <h3 className={headingClass}>
              Deep Learning &amp; Neural Networks Explained
            </h3>
            <p>
              <strong>Deep learning</strong> uses artificial <strong>neural networks</strong> with
              multiple hidden layers (deep architectures) to automatically learn hierarchical feature
              representations. <strong>Neural networks explained</strong> simply: each layer transforms
              the input, passing increasingly abstract representations forward — allowing the model to
              detect edges → shapes → objects in an image, or tokens → syntax → semantics in text.
            </p>
            <p>
              Key architectures dominating 2025:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>CNNs (Convolutional Neural Networks)</strong> — state-of-the-art for image
                classification, object detection, and medical imaging.
              </li>
              <li>
                <strong>Transformers (BERT, GPT, LLaMA)</strong> — dominant for NLP, code generation,
                and multimodal tasks.
              </li>
              <li>
                <strong>Transfer Learning</strong> — fine-tuning a pre-trained model (e.g., ResNet-50,
                ViT) on your domain-specific data, slashing training time from weeks to hours.
              </li>
            </ul>
            <p>
              <strong>Transfer learning explained</strong>: instead of training a neural network from
              scratch on limited data, you start from a model pre-trained on millions of samples
              (ImageNet, The Pile) and fine-tune only the final layers. This has democratised deep
              learning for small teams and is the foundation of modern
              <strong> foundation models</strong> like GPT-4 and Gemini.
            </p>

            {/* ── H3 When to use deep learning ── */}
            <h3 className={headingClass}>
              When to Use Deep Learning vs. Machine Learning: A Decision Framework
            </h3>
            <div className={`${base ? 'bg-gray-800' : 'bg-gray-50'} p-5 rounded-xl overflow-x-auto`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className={`font-bold ${base ? 'text-white' : 'text-black'}`}>
                    <td className="pr-6 pb-3">Factor</td>
                    <td className="pr-6 pb-3">Traditional ML</td>
                    <td className="pb-3">Deep Learning</td>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {[
                    ['Data Size', '&lt; 100K rows', '100K+ samples'],
                    ['Data Type', 'Tabular / structured', 'Images, text, audio'],
                    ['Interpretability', 'High (SHAP, LIME)', 'Low (black box)'],
                    ['Compute Needed', 'CPU sufficient', 'GPU / TPU required'],
                    ['Training Time', 'Minutes to hours', 'Hours to days'],
                    ['Best Models', 'XGBoost, LightGBM', 'Transformers, CNNs'],
                  ].map(([f, ml, dl]) => (
                    <tr key={f}>
                      <td className="pr-6 py-1 font-semibold" dangerouslySetInnerHTML={{__html: f}}/>
                      <td className="pr-6 py-1" dangerouslySetInnerHTML={{__html: ml}}/>
                      <td className="py-1" dangerouslySetInnerHTML={{__html: dl}}/>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              <strong>When to use deep learning</strong>: if your data is unstructured, you have
              50 K+ labelled samples, and GPU resources are available — go deep. Otherwise, start with
              a gradient-boosted tree and invest the saved compute budget into better feature engineering.
            </p>

            {/* ── Internal links ── */}
            <p>
              For a complete breakdown of the tools I use daily, check my{' '}
              <a href="#technologies" className={linkClass} aria-label="Technologies section">
                Technologies section
              </a>
              , and read <a href="#articles" className={linkClass} aria-label="Article 1">Article 1</a> on
              the full data science workflow to see how these models slot into an
              end-to-end MLOps pipeline.
            </p>

            {/* ── FAQ Schema targets ── */}
            <h3 className={headingClass}>Frequently Asked Questions</h3>
            <div className={`${base ? 'bg-gray-800' : 'bg-gray-50'} p-5 rounded-xl`}>
              <p className="font-semibold mb-1">Q: Is deep learning always better than machine learning?</p>
              <p className="mb-4">
                A: No. Deep learning outperforms traditional machine learning only on large,
                unstructured datasets (images, text, audio). For tabular data under 100K rows,
                XGBoost or LightGBM consistently match or beat neural networks while being far
                more interpretable and computationally cheap.
              </p>
              <p className="font-semibold mb-1">Q: What is transfer learning and why does it matter in 2025?</p>
              <p>
                A: Transfer learning lets you fine-tune a model pre-trained on massive datasets
                (like ImageNet or The Pile) on your specific task — achieving high accuracy with
                10–100× less labelled data. It is the cornerstone of modern LLMs (GPT, Gemini)
                and vision models (ViT, CLIP).
              </p>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
};

export default Articles;
