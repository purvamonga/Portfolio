import React from 'react';

interface ArticlesProps {
  isDarkMode: boolean;
}

// ─── Keyword Research Summary (SEMrush / Ahrefs / SERPWatcher data) ─────────
// Article 1 – Target Keywords (monthly search volume estimates):
//   "data science workflow"                ~8,100 / mo  | KD: Medium
//   "end-to-end machine learning pipeline" ~1,900 / mo  | KD: Low
//   "predictive modeling techniques"       ~2,400 / mo  | KD: Low–Medium
//   "python for data science"              ~14,800 / mo | KD: High (long-tail used)
//   "MLOps best practices 2025"            ~1,000 / mo  | KD: Low
//   "how to build a predictive model"      ~2,900 / mo  | KD: Low
//   "data preprocessing techniques"        ~3,600 / mo  | KD: Low
//   "AutoML workflow"                       ~1,300 / mo  | KD: Low
//
// Article 2 – Target Keywords:
//   "deep learning vs machine learning"    ~33,100 / mo | KD: Medium
//   "neural networks explained"            ~12,100 / mo | KD: Medium
//   "when to use deep learning"             ~2,400 / mo | KD: Low
//   "XGBoost vs neural network"             ~1,000 / mo | KD: Low
//   "AI model interpretability"             ~1,600 / mo | KD: Low
//   "transfer learning explained"           ~3,600 / mo | KD: Low
// ────────────────────────────────────────────────────────────────────────────

const Articles: React.FC<ArticlesProps> = ({ isDarkMode }) => {
  const dk = isDarkMode;

  const cardClass = `mb-16 p-8 rounded-2xl shadow-lg border transition-colors duration-300 ${
    dk ? 'bg-gray-900/80 border-gray-700' : 'bg-white border-gray-200'
  }`;
  const textClass = `space-y-5 text-base leading-relaxed ${dk ? 'text-gray-300' : 'text-gray-700'}`;
  const h3Class = `text-xl font-semibold mt-8 mb-2 ${dk ? 'text-white' : 'text-black'}`;
  const linkClass = `font-semibold underline underline-offset-2 ${dk ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`;
  const tagClass = `inline-block text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2 ${
    dk ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
  }`;
  const summaryClass = `mt-4 italic border-l-4 pl-4 ${
    dk ? 'text-gray-300 border-blue-500' : 'text-gray-600 border-blue-600'
  }`;
  const faqBoxClass = `${dk ? 'bg-gray-800' : 'bg-gray-50'} p-5 rounded-xl`;
  const metaClass = `text-sm ${dk ? 'text-gray-400' : 'text-gray-500'} flex flex-wrap gap-3 font-medium`;

  return (
    <div
      id="articles"
      className={`w-full min-h-screen font-inter flex flex-col items-center py-16 ${
        dk ? 'text-white bg-transparent' : 'text-black bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl z-10">

        {/* Section Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Insights &amp; Articles
          </h1>
          <p className={`text-xl ${dk ? 'text-gray-400' : 'text-gray-600'}`}>
            Original SEO-optimised deep-dives on Machine Learning and Data Science.
          </p>
        </header>

        {/* ════════════════════════════════════════════════════
            ARTICLE 1
            Primary:   "data science workflow" (~8,100/mo)
            Secondary: "predictive modeling" | "MLOps 2025"
                       "data preprocessing" | "AutoML"
        ════════════════════════════════════════════════════ */}
        <article
          className={cardClass}
          itemScope
          itemType="https://schema.org/Article"
        >
          {/* Keyword tags */}
          <div className="mb-4">
            {['Data Science Workflow', 'Predictive Modeling', 'MLOps 2025',
              'Python for Data Science', 'AutoML', 'Data Preprocessing'].map(tag => (
              <span key={tag} className={tagClass}>{tag}</span>
            ))}
          </div>

          <header className="mb-6">
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
            <p className={summaryClass} itemProp="description">
              <strong>Summary:</strong> A step-by-step breakdown of the <strong>data science workflow</strong> from raw datasets to deployed predictive models covering <strong>data preprocessing</strong>, EDA, model training, <strong>MLOps best practices</strong> and real-time deployment in 2025.
            </p>
          </header>

          <div className={textClass} itemProp="articleBody">

            <p>
              Most ML projects don't fail because of the algorithm. They fail before the data ever reaches one. A reliable <strong>data science workflow</strong> is what separates a model that ships from a notebook that quietly rots. Whether you're forecasting customer churn, flagging fraud or classifying medical images, the same structured <strong>end-to-end machine learning pipeline</strong> applies and skipping steps early tends to cost far more time later. Here's how I approach it in 2025.
            </p>

            <h3 className={h3Class}>
              Step 1 — Data Collection &amp; Preprocessing Techniques
            </h3>
            <p>
              Raw data is almost never clean. Missing values, outliers, class imbalances and encoding mismatches are not edge cases — they're the norm. The <strong>data preprocessing techniques</strong> I reach for most: median imputation for skewed numerical columns, Min-Max normalisation before feeding distance-based models, one-hot encoding for categoricals with low cardinality and SMOTE when the target class is badly imbalanced. Everything runs in <strong>Python for data science</strong> — pandas and scikit-learn pipelines keep each step reproducible and version-controllable via Git so a colleague (or future me) can re-run it six months later without guessing.
            </p>
            <p>
              In my{' '}
              <a href="#projects" className={linkClass} aria-label="Sahaya AI Career Platform project">
                Sahaya AI — Career Platform project
              </a>
              , systematic data cleaning alone pushed downstream model accuracy up 5–15% before any algorithm tuning happened.
            </p>

            <h3 className={h3Class}>Step 2 — Exploratory Data Analysis (EDA)</h3>
            <p>
              Before touching a model, I spend real time with the data. EDA using Matplotlib, Seaborn or Plotly surfaces things that summary statistics hide — skewed distributions, correlated features and silent data leakage. The OSEMN framework (Obtain → Scrub → Explore → Model → iNterpret) is a useful scaffold if you're early in building your <strong>data science workflow</strong> and want something your team can follow without a lengthy explanation.
            </p>

            <h3 className={h3Class}>
              Step 3 — How to Build a Predictive Model: Selection &amp; Training
            </h3>
            <p>
              My default approach: start with a baseline. Logistic regression or linear regression first, then escalate complexity only when the baseline genuinely falls short. Random Forest, Gradient Boosting (XGBoost / LightGBM) and Support Vector Machines cover a wide range of problems well. <strong>AutoML</strong> tools like H2O AutoML, FLAML and Auto-sklearn can automate model selection when you're under time pressure — in my experience they cut experimentation time by 50–70%, though they're not a substitute for understanding what they're doing under the hood.
            </p>
            <p>
              During my{' '}
              <a href="#experience" className={linkClass} aria-label="Machine Learning internship at Samsung PRISM">
                Machine Learning internship at Samsung PRISM
              </a>
              , I used stratified k-fold cross-validation and early stopping on every production model. Without those, overfitting on the training split is easy to miss until it's embarrassingly late — a common failure mode in real-world <strong>predictive modeling</strong>.
            </p>

            <h3 className={h3Class}>
              Step 4 — Evaluation, MLOps &amp; Real-Time Deployment
            </h3>
            <p>
              Metric choice matters more than people admit. RMSE and MAE for regression; F1-score, Precision-Recall and AUC-ROC for classification. Once a model passes validation, <strong>MLOps best practices in 2025</strong> mean: containerise with Docker, serve via FastAPI or Flask, monitor for data drift with Evidently AI and orchestrate retraining with Apache Airflow or Prefect. A model that isn't monitored in production is a model you've already started losing trust in — you just don't know it yet.
            </p>
            <p>
              For more on real-time inference and cloud deployment, my{' '}
              <a href="#certifications" className={linkClass} aria-label="Certifications section">
                Certifications section
              </a>{' '}
              covers the AWS and Google Cloud ML courses where I went deep on these patterns.
            </p>

            <h3 className={h3Class}>Frequently Asked Questions</h3>
            <div className={faqBoxClass}>
              <p className="font-semibold mb-1">Q: What is the best data science workflow for beginners?</p>
              <p className="mb-5">
                A: Start with OSEMN — Obtain clean data, Scrub it with pandas, Explore it via EDA, Model with scikit-learn and iNterpret using SHAP values. Python is the right starting language; its ecosystem is wide enough to cover you from first notebook to production deploy.
              </p>
              <p className="font-semibold mb-1">Q: How long does it take to build a predictive model?</p>
              <p>
                A: A quick baseline can be running in a few hours. A production model with validation, monitoring and a real deployment pipeline typically takes 2–8 weeks depending heavily on data quality.
              </p>
            </div>

          </div>
        </article>

        {/* ════════════════════════════════════════════════════
            ARTICLE 2
            Primary:   "deep learning vs machine learning" (~33,100/mo)
            Secondary: "neural networks explained" | "XGBoost vs neural network"
                       "transfer learning" | "AI model interpretability"
        ════════════════════════════════════════════════════ */}
        <article
          className={cardClass}
          itemScope
          itemType="https://schema.org/Article"
        >
          {/* Keyword tags */}
          <div className="mb-4">
            {['Deep Learning', 'Machine Learning', 'Neural Networks',
              'CNN', 'Transfer Learning', 'AI Interpretability', 'XGBoost'].map(tag => (
              <span key={tag} className={tagClass}>{tag}</span>
            ))}
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
              <strong>Summary:</strong> A practical breakdown of <strong>deep learning vs. traditional machine learning</strong> — what the architectures actually are, when each approach makes sense, XGBoost vs. neural network benchmarks, how transfer learning works and what <strong>AI model interpretability</strong> looks like in practice.
            </p>
          </header>

          <div className={textClass} itemProp="articleBody">

            <p>
              The <strong>deep learning vs. machine learning</strong> question gets 33,000+ monthly searches and I understand why — the framing implies there's a clear winner. There isn't. Both sit under the AI umbrella; the difference is in what problems they're actually good at. Pick the wrong one and you'll burn weeks of compute time on something a gradient boosted tree could have solved over lunch.
            </p>

            <h3 className={h3Class}>
              Traditional Machine Learning: Faster, Leaner and More Readable
            </h3>
            <p>
              Linear Regression, Decision Trees, Random Forest and XGBoost are the workhorses for structured tabular data. In most Kaggle competitions on tabular datasets under 1 million rows, <strong>XGBoost vs. neural network</strong> benchmarks consistently favour XGBoost — and by a margin that makes the GPU bill look pretty hard to justify.
            </p>
            <p>
              These models also give you real <strong>AI model interpretability</strong> through SHAP (SHapley Additive exPlanations) and LIME. That matters a lot in healthcare, finance or legal tech where "the model said so" isn't an acceptable explanation to a regulator.
            </p>
            <p>
              My{' '}
              <a href="#projects" className={linkClass} aria-label="Music Genre and Mood Classification project">
                Music Genre &amp; Mood Classification project
              </a>{' '}
              is a good example: ensemble methods hit 91% accuracy on an audio feature dataset without touching a GPU.
            </p>

            <h3 className={h3Class}>
              Deep Learning &amp; Neural Networks Explained
            </h3>
            <p>
              Deep learning uses <strong>neural networks</strong> with many hidden layers to learn feature representations directly from raw data — no manual feature engineering. Each layer builds on the last: edges → shapes → objects in an image; tokens → syntax → meaning in text. That's <strong>neural networks explained</strong> without the textbook formalism.
            </p>
            <p>The architectures doing the heavy lifting in 2025:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>CNNs (Convolutional Neural Networks)</strong> — still the go-to for image classification, object detection and medical imaging.
              </li>
              <li>
                <strong>Transformers (BERT, GPT, LLaMA)</strong> — dominant across NLP, code generation and multimodal tasks.
              </li>
              <li>
                <strong>Transfer Learning</strong> — fine-tune a pre-trained model like ResNet-50 or ViT on your own data, cutting training time from weeks to hours.
              </li>
            </ul>
            <p>
              On <strong>transfer learning</strong>: instead of training from scratch on a small labelled dataset, you start from a model already trained on millions of samples (ImageNet, The Pile) and adjust only the final layers. It's why small teams can run competitive vision or language models without access to warehouse-scale compute. Foundation models like GPT-4 and Gemini are built on exactly this idea.
            </p>

            <h3 className={h3Class}>
              When to Use Deep Learning vs. Machine Learning: A Decision Framework
            </h3>
            <div className={`${dk ? 'bg-gray-800' : 'bg-gray-50'} p-5 rounded-xl overflow-x-auto`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className={`font-bold border-b ${dk ? 'text-white border-gray-700' : 'text-black border-gray-200'}`}>
                    <td className="pr-6 pb-3 pt-1">Factor</td>
                    <td className="pr-6 pb-3 pt-1">Traditional ML</td>
                    <td className="pb-3 pt-1">Deep Learning</td>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Data Size', '< 100K rows', '100K+ samples'],
                    ['Data Type', 'Tabular / structured', 'Images, text, audio'],
                    ['Interpretability', 'High (SHAP, LIME)', 'Low (black box)'],
                    ['Compute Needed', 'CPU sufficient', 'GPU / TPU required'],
                    ['Training Time', 'Minutes to hours', 'Hours to days'],
                    ['Best Models', 'XGBoost, LightGBM', 'Transformers, CNNs'],
                  ].map(([f, ml, dl]) => (
                    <tr key={f} className={`border-b last:border-0 ${dk ? 'border-gray-700' : 'border-gray-100'}`}>
                      <td className="pr-6 py-2 font-semibold">{f}</td>
                      <td className="pr-6 py-2">{ml}</td>
                      <td className="py-2">{dl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              The short version: if your data is unstructured, you have 50K+ labelled samples and GPUs are available — go deep. Otherwise, start with gradient boosting and put the saved compute budget into better features. The fancier architecture rarely makes up for messy inputs.
            </p>
            <p>
              The tools I use day-to-day for both approaches are in my{' '}
              <a href="#technologies" className={linkClass} aria-label="Technologies section">
                Technologies section
              </a>
              . And if you want to see how these models fit into a full deployment pipeline,{' '}
              <a href="#articles" className={linkClass} aria-label="Article 1 data science workflow">
                Article 1
              </a>{' '}
              walks through the end-to-end MLOps workflow.
            </p>

            <h3 className={h3Class}>Frequently Asked Questions</h3>
            <div className={faqBoxClass}>
              <p className="font-semibold mb-1">Q: Is deep learning always better than machine learning?</p>
              <p className="mb-5">
                A: No. On tabular data under 100K rows, XGBoost and LightGBM consistently match or beat neural networks — and they're far cheaper to train and easier to explain. Deep learning earns its place on unstructured data (images, text, audio) where manual feature engineering doesn't scale.
              </p>
              <p className="font-semibold mb-1">Q: What is transfer learning and why does it matter in 2025?</p>
              <p>
                A: Transfer learning lets you fine-tune a model pre-trained on a massive dataset like ImageNet or The Pile on your specific task. You get high accuracy with a fraction of the labelled data you'd otherwise need. It's the foundation of modern LLMs like GPT and Gemini and of vision models like ViT and CLIP.
              </p>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
};

export default Articles;
