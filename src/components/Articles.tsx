import React from 'react';

interface ArticlesProps {
  isDarkMode: boolean;
}

const Articles: React.FC<ArticlesProps> = ({ isDarkMode }) => {
  return (
    <div
      id="articles"
      className={`w-full min-h-screen font-inter flex flex-col items-center py-16
        ${isDarkMode ? 'text-white bg-transparent' : 'text-black bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Insights & Articles
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Thoughts, tutorials, and insights on Machine Learning and Data Science.
          </p>
        </header>

        {/* Article 1 */}
        <article className={`mb-16 p-8 rounded-2xl shadow-lg border transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white border-gray-200'}`}>
          <header className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              The Ultimate Data Science Workflow: From Raw Data to Predictive Models
            </h2>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} flex gap-4 font-medium`}>
              <time dateTime="2026-05-01">May 1, 2026</time>
              <span>• 5 min read</span>
            </div>
            {/* Meta description conceptually represented as a summary for readers */}
            <p className={`mt-4 italic border-l-4 pl-4 ${isDarkMode ? 'text-gray-300 border-blue-500' : 'text-gray-600 border-blue-600'}`}>
              <strong>Summary:</strong> Discover the step-by-step data science workflow to transform raw datasets into powerful predictive models using core machine learning algorithms.
            </p>
          </header>
          
          <div className={`space-y-5 text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p>
              In today's data-driven world, understanding the <strong>data science workflow</strong> is essential for building accurate <strong>predictive models</strong>. Whether you are forecasting sales or categorizing images, applying the right <strong>machine learning algorithms</strong> systematically ensures scalable and robust solutions.
            </p>
            
            <h3 className={`text-2xl font-semibold mt-8 mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>1. Data Collection and Preprocessing</h3>
            <p>
              The foundation of any successful project lies in clean data. Raw data often contains missing values, outliers, and noise. Effective data preprocessing involves imputation, normalization, and handling categorical variables. As demonstrated in my <a href="#projects" className={`font-semibold hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Sahaya AI project</a>, meticulous data cleaning directly correlates with higher model accuracy.
            </p>

            <h3 className={`text-2xl font-semibold mt-8 mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>2. Exploratory Data Analysis (EDA)</h3>
            <p>
              Before feeding data into <strong>machine learning algorithms</strong>, you must understand its distribution. EDA utilizes statistical graphics and visualization techniques to uncover patterns and identify relationships between variables.
            </p>

            <h3 className={`text-2xl font-semibold mt-8 mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>3. Model Selection and Training</h3>
            <p>
              Choosing the right model depends on the problem type (classification vs. regression). Algorithms like Random Forest, Gradient Boosting, or Support Vector Machines are often starting points. Training involves splitting data into training and testing sets to prevent overfitting, a technique I frequently applied during my <a href="#experience" className={`font-semibold hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Machine Learning internship at Samsung</a>.
            </p>
            
            <h3 className={`text-2xl font-semibold mt-8 mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>4. Evaluation and Deployment</h3>
            <p>
              Finally, evaluating the model using metrics like RMSE, F1-Score, or AUC-ROC ensures the model performs well on unseen data. Once validated, the model is deployed into production for real-time inference.
            </p>
          </div>
        </article>

        {/* Article 2 */}
        <article className={`p-8 rounded-2xl shadow-lg border transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white border-gray-200'}`}>
          <header className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Deep Learning vs. Traditional Machine Learning: Which Should You Choose?
            </h2>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} flex gap-4 font-medium`}>
              <time dateTime="2026-05-15">May 15, 2026</time>
              <span>• 4 min read</span>
            </div>
            <p className={`mt-4 italic border-l-4 pl-4 ${isDarkMode ? 'text-gray-300 border-blue-500' : 'text-gray-600 border-blue-600'}`}>
              <strong>Summary:</strong> Navigate the complex landscape of AI by understanding the key differences between deep learning neural networks and traditional machine learning algorithms.
            </p>
          </header>

          <div className={`space-y-5 text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p>
              The debate between <strong>deep learning</strong> and <strong>traditional machine learning</strong> is highly relevant for today's AI practitioners. While both fall under the umbrella of <strong>artificial intelligence</strong>, their architectures, data requirements, and use cases differ significantly.
            </p>

            <h3 className={`text-2xl font-semibold mt-8 mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>The Case for Traditional Machine Learning</h3>
            <p>
              Traditional algorithms like Linear Regression, Decision Trees, and K-Means Clustering excel when datasets are relatively small and interpretability is crucial. They require less computational power and are easier to tune. For tabular data, models like XGBoost often outperform complex neural networks. Check out my <a href="#projects" className={`font-semibold hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Music Genre Classification project</a> to see traditional algorithms in action.
            </p>

            <h3 className={`text-2xl font-semibold mt-8 mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>The Power of Deep Learning</h3>
            <p>
              <strong>Deep learning</strong> leverages artificial <strong>neural networks</strong> with multiple layers to extract high-level features from unstructured data such as images, text, and audio. Models like Convolutional Neural Networks (CNNs) and Transformers have revolutionized computer vision and natural language processing.
            </p>
            <p>
              However, deep learning demands massive amounts of labeled data and significant GPU resources. They act as "black boxes," making it difficult to understand exactly how they arrive at a specific prediction.
            </p>

            <h3 className={`text-2xl font-semibold mt-8 mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>Making the Decision</h3>
            <p>
              Start with traditional machine learning to establish a baseline. If your data is unstructured (like images or text) and you have sufficient volume and compute power, transition to <strong>deep learning</strong>. Ultimately, the best approach depends on aligning your resources with your specific <strong>predictive analytics</strong> goals.
            </p>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Articles;
