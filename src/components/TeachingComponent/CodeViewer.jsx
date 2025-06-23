import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const pythonCode = `
import numpy as np
from scipy.optimize import root, bisect
from scipy.integrate import quad
import pandas as pd

# Given scores
scores = np.array([
    71.63636364, 69.44318182, 69.21212121, 68.56818182, 66.37121212, 65.65909091,
    60.31060606, 57.96212121, 56.98106061, 56.20454545, 55.54545455, 54.48484848,
    54.09469697, 53.73484848, 53.51136364, 53.23863636, 52.63636364, 51.87121212,
    50.04166667, 49.52272727, 45.78030303, 40.27651515, 38.88636364, 38.04545455,
    37.86363636, 35.78030303, 27.06439394, 25.78030303, 22.54166667, 14.33333333,
    12, 6.666666667, 0
])

mu_empirical = np.mean(scores)
m2_empirical = np.mean(scores**2)

def equations(lambdas):
    l1, l2 = lambdas
    Z, _ = quad(lambda x: np.exp(l1*x + l2*x**2), 0, 100)
    mean_integral, _ = quad(lambda x: x*np.exp(l1*x + l2*x**2), 0, 100)
    m2_integral, _ = quad(lambda x: x**2*np.exp(l1*x + l2*x**2), 0, 100)

    mean_calc = mean_integral / Z
    m2_calc = m2_integral / Z

    return [mean_calc - mu_empirical, m2_calc - m2_empirical]

initial_guess = [0.0, 0.0]
solution = root(equations, initial_guess, method='hybr')
lambda_1, lambda_2 = solution.x

Z, _ = quad(lambda x: np.exp(lambda_1*x + lambda_2*x**2), 0, 100)
pdf = lambda x: np.exp(lambda_1*x + lambda_2*x**2) / Z
cdf = lambda x: quad(pdf, 0, x)[0]

# Optimal threshold determination (decision-theoretic)
def compute_conditional_means(thresh):
    means = []
    for j in range(len(thresh)-1):
        num, _ = quad(lambda x: x * pdf(x), thresh[j], thresh[j+1])
        den, _ = quad(pdf, thresh[j], thresh[j+1])
        means.append(num / den if den != 0 else (thresh[j] + thresh[j+1])/2)
    return means

# Initial thresholds (percentile based)
initial_percentiles = [0, 10, 30, 60, 85, 100]
initial_thresholds = [bisect(lambda x: cdf(x)-p/100, 0, 100) for p in initial_percentiles]

# Iteratively update thresholds
thresholds = initial_thresholds
tolerance = 1e-2
max_iter = 100

for _ in range(max_iter):
    means = compute_conditional_means(thresholds)
    new_thresholds = [0] + [(means[i] + means[i+1])/2 for i in range(len(means)-1)] + [100]
    if np.linalg.norm(np.array(new_thresholds)-np.array(thresholds)) < tolerance:
        break
    thresholds = new_thresholds

# Assign grades
def assign_grade(score, thresholds):
    grades = ['F', 'D', 'C', 'B', 'A']
    for i in range(len(thresholds)-1):
        if thresholds[i] <= score < thresholds[i+1]:
            return grades[i]
    return 'F'

assigned_grades = [assign_grade(score, thresholds) for score in scores]

# Results DataFrame
df_results = pd.DataFrame({'Score': scores, 'Grade': assigned_grades}).sort_values(by='Score', ascending=False)
print(df_results)

from IPython.display import display
display(df_results)
`;

const CodeViewer = () => {
  return (
    <SyntaxHighlighter language="python" style={dracula} showLineNumbers>
      {pythonCode}
    </SyntaxHighlighter>
  );
}

export default CodeViewer;