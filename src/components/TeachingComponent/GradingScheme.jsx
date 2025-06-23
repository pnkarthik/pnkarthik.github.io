import React from "react";
import { MathJax } from "better-react-mathjax";
import CodeViewer from "./CodeViewer";

const GradingScheme = () => {
  return (
    <div className="col">
      <p></p>
      <p className="headingFontSize">
        A Grading Scheme Based on MaxEnt and Least Squares
      </p>
      As a teacher, one of the responsibilities that I cannot shy away from is
      that of assigning letter grades to the numerical scores of students. Many
      a time, the exercise of assigning grades to numerical scores is an adhoc
      one. While some teachers abide by the classical "bell curve" grading
      scheme, it is known that the latter scheme is not appropriate when the
      numerical scores of students are computed through a weighted sum of one or
      more internal assessments or evaluations. In the courses I typically
      teach, the internal assessments comprise quizzes, mid-term exams, scribe,
      and a final exam, each having a certain weightage (e.g., 20% for quizzes,
      30% for mid-term exams, etc.), with an optional weightage given to
      in-person attendance. Keeping in mind the variability in students' scores
      across each of the internal assessments, I felt the need to come up with
      my own grading scheme, one that is grounded in the principles of
      information theory and statistics, and has a probabilistic backing to it.
      In what follows, I propose a scheme for assigning letter grades to
      numerical scores based on the principles of maximum entropy and least
      squares.
      <MathJax>
        <p></p>
        <h4>The Maximum Entropy (MaxEnt) Principle</h4>
        <p></p>
        Proposed first by E. T. Jaynes, the maximum entropy principle answers
        the following fundamental question: Given a set of (random) observed
        data samples, what probability distribution could possibly have
        generated these samples? It is plausible to reason that the mean of the
        unknown, underlying probability distribution should match the empirical
        mean of the observed data samples, the second moment of the underlying
        probability distribution should match the empirical second moment of the
        data samples, and so on (typically, the first two moments suffice for
        most practical purposes). Except the information about moments derived
        from the data, when no other information about the underlying
        probability distribution is known, the maximum entropy principle
        proposes choosing that distribution whose Shannon entropy is the
        largest. When probability distributions on uncountable sets are
        involved, the notion of Shannon entropy may be replaced by differential
        entropy.
        <p></p>
        Considering that a class comprises $n$ students, let \(X_1, \ldots,
        X_n\) be the scores of the students, normalised to lie in the interval
        $[a,b]$ for some $-\infty \lt a \lt b \lt +\infty$. Assuming that the
        student scores are drawn independently and identically from a
        probability density function $f$ on $[a,b]$, the differential entropy of
        $f$ is defined as{" "}
        <MathJax>
          {
            "\\[H(f) := \\int_{a}^{b} f(x) \\, \\log \\frac{1}{f(x)} \\, \\textup{d} x.\\]"
          }
        </MathJax>
        Let \(m_1\) and \(m_2\) denote respectively the empirical first and
        second moments of the observed student scores, i.e.,{" "}
        <MathJax>
          {
            "\\[m_1 = \\frac{1}{n} \\sum_{i=1}^{n} X_i, \\qquad \\qquad m_2 = \\frac{1}{n} \\sum_{i=1}^{n} X_i^2.\\]"
          }
        </MathJax>
        Let {`\\( \\mathcal{P}(a,b,m_1,m_2) \\)`} denote the set of all
        probability density functions on $[a,b]$ whose first and second moments
        are equal to $m_1$ and $m_2$ respectively. The MaxEnt principle entails
        solving the following constrained optimisation problem:
        <MathJax>
          {
            "\\[\\sup_{f \\, \\in \\, \\mathcal{P}(a,b,m_1,m_2)} \\ \\ \\int_{a}^{b} f(x) \\, \\log \\frac{1}{f(x)} \\, \\textup{d} x.\\]"
          }
        </MathJax>
        <p></p>
        <h4>Solving the Constrained Optimisation Problem</h4>
        <p></p>
        To solve the above constrained optimisation problem, we construct the
        Lagrangian with multipliers $\lambda_0$, $\lambda_1$, and $\lambda_2$ as
        follows.
        <MathJax>
          {
            "\\[\\mathcal{L}(f, \\lambda_0, \\lambda_1, \\lambda_2) = -\\int_{a}^{b} f(x) \\, \\log f(x) \\, \\textup{d}x + \\lambda_0\\left(\\int_{a}^{b} f(x) \\, \\textup{d}x - 1\\right) + \\lambda_1\\left(\\int_{a}^{b} x \\, f(x) \\, \\textup{d}x - m_1\\right) + \\lambda_2 \\left(\\int_{a}^{b} x^2 \\, f(x) \\, \\textup{d}x - m_2\\right).\\]"
          }
        </MathJax>
        Taking the functional derivative of the Lagrangian with respect to $f$,
        we get
        <MathJax>
          {
            "\\[\\frac{\\partial \\mathcal{L}}{\\partial f} = -(1+\\log f(x)) + \\lambda_0 + \\lambda_1 x + \\lambda_2 x^2.\\]"
          }
        </MathJax>
        Setting the above partial derivative to zero, we get
        <MathJax>
          {
            "\\[f(x) = \\exp\\left(\\lambda_0-1 + \\lambda_1 x + \\lambda_2 x^2\\right), \\qquad x \\in [a,b],\\]"
          }
        </MathJax>
        or equivalently,
        <MathJax>
          {
            "\\[f(x) = \\frac{1}{Z} \\ \\exp\\left(\\lambda_1 x + \\lambda_2 x^2\\right), \\qquad x \\in [a,b],\\]"
          }
        </MathJax>
        where $Z$ is the normalisation factor given by
        <MathJax>
          {
            "\\[Z = \\int_{a}^{b} \\exp\\left(\\lambda_1 x + \\lambda_2 x^2\\right) \\, \\textup{d}x.\\]"
          }
        </MathJax>
        The Lagrange multipliers {`\\( \\lambda_1, \\lambda_2 \\)`} may be
        obtained by solving following equations numerically.
        <MathJax>
          {
            "\\[m_1 = \\frac{\\int_{a}^{b} x \\, \\exp\\left(\\lambda_1 x + \\lambda_2 x^2\\right) \\, \\textup{d}x}{\\int_{a}^{b} \\exp\\left(\\lambda_1 x + \\lambda_2 x^2\\right) \\, \\textup{d}x}, \\qquad \\qquad m_2 = \\frac{\\int_{a}^{b} x^2 \\, \\exp\\left(\\lambda_1 x + \\lambda_2 x^2\\right) \\, \\textup{d}x}{\\int_{a}^{b} \\exp\\left(\\lambda_1 x + \\lambda_2 x^2\\right) \\, \\textup{d}x}.\\]"
          }
        </MathJax>
        <p></p>
        <h4>Setting Thresholds for Grade Assignment</h4>
        <p></p>
        Suppose that each student is to be assigned one grade from a set{" "}
        {`\\( \\mathcal{S}=\\{G_1, \\ldots, G_K\\} \\)`} of $K$ feasible grades.
        Let {`\\[ a=T_0<T_1<T_2<\\cdots<T_K=b \\]`} be numbers such that a
        student with score $X$ receives grade $G_j$ if{" "}
        {`\\( T_{j-1} \\leq X < T_j \\)`}. Corresponding to grade $G_j$, we
        define an associated squared loss function $L(X, G_j)$ as
        {`\\[ L(X, G_j) = (X-\\mu_j)^2, \\]`}
        where $\mu_j$ denotes the conditional mean of scores within the grade
        interval corresponding to $G_j$, i.e.,
        {`\\[ \\mu_j = \\mathbb{E}[X \\mid T_{j-1} \\leq X < T_j] = \\frac{\\int\\limits_{T_{j-1}}^{T_j} x \\, \\exp\\left(\\lambda_1^* \\, x + \\lambda_2^* \\, x^2\\right) \\, \\textup{d}x}{\\int\\limits_{T_{j-1}}^{T_j} \\exp\\left(\\lambda_1^* \\, x + \\lambda_2^* \\, x^2\\right) \\, \\textup{d}x}.\\]`}
        Here, the constants $\lambda_1^*$ and $\lambda_2^*$ are obtained from
        solving the constrained optimisation problem of the previous step.
        <p></p>
        <h4>Solving for the Optimal Thresholds via Least Squares</h4>
        To determine the grades, we compute the optimal thresholds by solving
        the following least squares problem:
        {`\\[ \\inf_{(a=T_0, \\ldots, T_{K}=b)} \\ \\sum_{j=1}^{K} \\ \\int_{T_{j-1}}^{T_j} (x-\\mu_j)^2 \\, f^*(x) \\, \\textup{d}x,\\]`}
        where $f^*$ above denotes the optimal MaxEnt probability density
        function, with $f^*(x) \propto \exp(\lambda_1^* \, x + \lambda_2^* \,
        x^2)$. A simple computation reveals that to meet the first-order
        stationarity conditions (KKT conditions), the optimal thresholds (say
        $T_0^*, \ldots, T_K^*$) must satisfy
        {`\\[ T_0^*=a, \\quad T_K^*=b, \\qquad T_j^* = \\frac{\\mu_{j-1} + \\mu_j}{2}, \\quad j \\in \\{1, \\ldots, K-1\\}.  \\]`}
        Noting that the conditional means are functions of the thresholds and
        the optimal thresholds are functions of the conditional means, the
        following iterative algorithm may be used to arrive at the optimal
        thresholds in practice.
        <ol>
          <li>Start with initial guesses for the thresholds.</li>
          <li>
            Compute the conditional means from the thresholds using the formula
            {`\\[ \\mu_j = \\mathbb{E}[X \\mid T_{j-1} \\leq X < T_j] = \\frac{\\int\\limits_{T_{j-1}}^{T_j} x \\, \\exp\\left(\\lambda_1^* \\, x + \\lambda_2^* \\, x^2\\right) \\, \\textup{d}x}{\\int\\limits_{T_{j-1}}^{T_j} \\exp\\left(\\lambda_1^* \\, x + \\lambda_2^* \\, x^2\\right) \\, \\textup{d}x}.\\]`}
          </li>
          <li>
            Update the thresholds to midpoints between adjacent conditional
            means according to the relation
            {`\\[ T_0^{\\rm new}=a, \\quad T_K^{\\rm new}=b, \\qquad \\qquad T_j^{\\rm new} = \\frac{\\mu_{j-1} + \\mu_j}{2}, \\quad j \\in \\{1, \\ldots, K-1\\}.  \\]`}
          </li>
          <li>
            Repeat steps 2 and 3 until the thresholds stabilise within a certain
            desired tolerance (say $\varepsilon=0.01$).
          </li>
        </ol>
      </MathJax>
      <CodeViewer />
    </div>
  );
};

export default GradingScheme;
