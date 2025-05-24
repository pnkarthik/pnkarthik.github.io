import React from "react";
import tableData from "./TeachingTableData.json";

const TeachingComponent = () => {

  return (
    <>
      <div className="col">
        <p></p>
        <p className="headingFontSize">Teaching at IIT Hyderabad</p>
        <div className="w-100 max-w-100 overflow-auto">
          <table border={1}>
            <thead>
              <tr>
                <th className="py-2 px-4">Term</th>
                <th className="py-2 px-4">Code</th>
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Enrolment</th>
                <th className="py-2 px-4">Course Rating</th>
                <th className="py-2 px-4">Instructor Rating</th>
                <th className="py-2 px-4">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.iith?.map((data, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">
                    {/* Reusing badge/button snippet for displaying term */}
                    <div className="d-flex flex-row newsContainer">
                      <div className="talkDate newsDateContainer">
                        <div className="badge dateColor p-1 newsDate">
                          {data?.term}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{data?.courseCode}</td>
                  <td className="py-2 px-4">
                    <a href={data?.courseLink} target="_blank" rel="noopener noreferrer">
                      {data?.courseTitle}
                    </a>
                  </td>
                  <td className="py-2 px-4">{data?.noOfStudents}</td>
                  <td className="py-2 px-4">{data?.courseRating}</td>
                  <td className="py-2 px-4">{data?.instructorRating}</td>
                  <td className="py-2 px-4">
                    <a href={data?.feedback} target="_blank" rel="noopener noreferrer">
                      Comments
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col">
        <p></p>
        <p className="headingFontSize">Testimonials from Students of IIT Hyderabad</p>
        <ul>
          <li>From a student of AI1013, Feb-Apr 2025 batch (as communicated by the student via email):<br/><br/>"Dear Karthik sir,<br/><br/>I'm just writing this mail to express my gratitude. Your pedagogy was amazing. It truly sparked my interest, especially CNNs. Though CNNs were taught by master's and PhD students, the way the course was structured made it all the more engaging and fun.<br/><br/>I'm looking forward to learning a lot more, and if possible, taking another course from you in the future. Sure, I didn't get an A, I missed two classes because I was ill, but never mind, I learned a lot from this course. It was genuinely enjoyable. I also really appreciated the TAs’ support and insights during the course.<br/><br/>Thank you so much for your dedication."</li>
          <br/>
          <li>From a student of CS6660, Jul-Nov 2024 batch (as communicated by the student via email):<br/><br/>"Dear Karthik sir,<br/><br/>Thank you for recognizing my performance in CS6660.<br/><br/>Having missed academics for a while, I feel incredibly fortunate to have had the opportunity to return to learning under your guidance. Your dedication to maintaining rigour and delivering a well-structured course has inspired me to stay consistent and engaged throughout. Your teaching skills and the effort you put into preparing the course material have earned immense respect not just from me, but I am confident, from the entire class as well.<br/><br/>While attending the full version of this course taught to the regular batch is not feasible for me as an online student, I truly hope for the opportunity in the future to further explore these topics through your teaching.<br/><br/>Once again, thank you for your encouragement and for making the course an enriching experience. I look forward to attending more of your theory courses in the future.</li>
          <br/>
          <li>From a student of AI5030, Jul-Nov 2024 batch (as posted by the student on Google classroom):<br/><br/>"Why not the world get benefitted by our great profs. Lets wish that in near future Prof will come out with NPTEL course(s) to teach/reach students across the globe. Lets endorse the highly deserving team of prof/TAs on linkedin than just in internal platforms. Prof. has the zeal to give as much as possible to students. Understood the importance of providing recordings of the classes and promptly uploading them. Has been carefully designing the questions/ assignments to enhance our thinking levels. Feel myself fortunate to have got the chance to attend his lectures.  Student friendly. Innovated open quiz. ಧನ್ಯವಾದಗಳು to Karthik sir. धन्यवाद to non-telugu TAs. As I once told in tutorials it was like 'yathaa Guruji tathaa TA's (how is the teacher..so are all the TAs in terms of dedication & efforts!) The following (lines) are in recognition of the voluntary service by TAs."<p></p>"మహిమ గల్గి వుండె(/డు) మహవితు బోధలో<br/>యెంతొ ఓర్పు గలదు, ఎట్లు అబ్బె?<br/>పట్టుబట్టి మీరు (/తమరు) పలు లెక్కలను (/జవాబులు)జెప్ప<br/>వినెడు భాగ్యమబ్బె విక్రమునకు!"<p></p>"మహిమ కలిగి వుండు మహవితు బోధలు<br/>ఓర్పు తోడ చెప్పు; ఒనరెనెట్లొ?<br/>పట్టుబట్టి తాను పలు అంశములుజెప్ప<br/>వినెడు భాగ్యమబ్బె విక్రమునకు!"<p></p>A rough translation of the above verses: there is some magic (mahatva in hindi) in the teachings of 'Mahavith'. So patiently he teaches! How he got this talent/ quality? Fortunate are we (/vikram) to have had the chance to learn from Mahavith!<br/>The above lines are in praise of the efforts put in by <a href="https://www.linkedin.com/in/akshintala-venkata-mahvith-b425211a5/">Mahvith Akshintala</a>, one of the teaching assistants for AI5030 during Jul-Nov 2024 term.<p></p>"సిద్ధహస్తుడయ్యె సిద్ధార్థుడెంతయో<br/>వాస్తవముగ; తోటివారి మేలు<br/>కోరి బోధసేయు  కొసరికొసరి; నీది<br/>శుద్ధ మనసుగాన శుభము కలుగు!"<p></p>Rough translation of the above verses: Truth spoken (~vaastav), Siddharth has become an expert (got the 'siddharth' of hindi) of teaching selflessly to classmates. Being a person with holy thoughts, let all good shower on to him.<br/>The above lines are in praise of the efforts put in by <a href="https://siddharth-shrivastava7.github.io/">Siddharth Shrivastava</a>, one of the teaching assistants for AI5030 during Jul-Nov 2024 term.</li>
          <br/>
          <li>From a student of AI5030, Jul-Nov 2024 batch (as posted by the student on Google classroom):<br/><br/>"Thank you, Sir, for your unwavering dedication and commitment. Your efforts in making the subject comprehensible and engaging, even in my absence, have been truly invaluable. I deeply appreciate the time and patience you invest in ensuring that every student understands the material, and I am grateful for the support and guidance you provide. Your teaching has made a significant impact on my learning, and I am sincerely thankful for all that you do."</li>
        </ul>
      </div>
      <div className="col">
        <p></p>
        <p className="headingFontSize">Teaching at IISc</p>
        <div className="w-100 max-w-100 overflow-auto">
          <table border={1}>
            <thead>
              <tr>
                <th className="py-2 px-4">Term</th>
                <th className="py-2 px-4">Course Code</th>
                <th className="py-2 px-4">Course Title</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.iisc?.map((data, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">
                    {/* Wrap the term in a badge container */}
                    <div className="d-flex flex-row newsContainer">
                      <div className="talkDate newsDateContainer">
                        <div className="badge dateColor p-1 newsDate">
                          {data?.term}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{data?.courseCode}</td>
                  <td className="py-2 px-4">
                    <a href={data?.courseLink} target="_blank" rel="noopener noreferrer">
                      {data?.courseTitle}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col">
        <p></p>
        <p className="headingFontSize">My Teaching Philosophy</p>
          My teaching philosophy is rooted in the belief that all students can learn, given a conducive learning environment and an engaging teaching style that caters to their unique needs. I believe that teaching is a two‑way process, where both students and teachers learn from one another. Below is a glimpse into my modus operandi of teaching.
        <ul>
          <li>Teaching After Learning, Learning After teaching:<br/>I believe that teaching should follow learning and learning should follow teaching. Prior to delivering a lecture on a particular topic, I introspect about ways to explain the concept in the simplest possible terms to someone unfamiliar with the subject matter. Once I have arrived at a clear and concise explanation that is satisfactory to me, I deliver the same in the lecture while keeping open my thought process (you read that right; listening to lectures is a great way to delve into the thought process of the person delivering the lecture). At regular intervals of time, I solicit feedback on my teaching; this allows me to identify areas where my explanations can be refined and improved.</li>
          <li>Teaching as a Tool to Kindle the Spirit of Enquiry:<br/>My exposure to lectures delivered by distinguished researchers has reinforced my core belief that effective teaching involves instilling in students an intrinsic curiosity and a capacity for enquiry, rather than merely providing them with ready-made solutions. Drawing on the pedagogical practices of my mentors, I strive to maintain a delicate balance between delivering well-crafted material that is easily comprehensible, while also offering points of reflection that foster students' cognitive development.</li>
          <li>Undergraduate Teaching Philosophy:<br/>The undergraduate student community in India is renowned for its exceptional intellectual capabilities, cultivated through rigorous training for entrance exams such as the Joint Entrance Exam (JEE). To capitalize on this strength, it is imperative to impart to these students the art of breaking down complex problems into smaller, manageable tasks, and approach each one of them systematically. To achieve this goal, I typically introduce problem sets which comprise a number of smaller sub-problems, upon solving all of which the overall problem will be solved. I try to present live simulations in class, allowing students to observe the source code and witness first-hand how simple concepts can be visualised. For instance, in <a href="https://youtu.be/xyjWP0GQD0U">this lecture</a> delivered to the undergraduate students at R V College of Engineering, I demonstrate using Python simulations how a Gamma distribution can be fitted to the data obtained from a certain "odd-one-out" task in cognitive neuroscience, and how the goodness of fit can be assessed using Kolmogorov--Smirnoff tests. This illustrates how everyday phenomena can be quantitatively analyzed using fundamental mathematical tools. By presenting such real-world examples in class, I attempt to motivate students to explore and apply mathematical concepts in their own problem-solving endeavors.</li>
          <li>Graduate Teaching Philosophy:<br/>While undergraduate education is a crucial foundation for honing a student's problem-solving aptitude, typically emphasizing "how" things work, graduate studies offers a switches of perspective to understand "why" things work the way they work. I believe that it is crucial for graduate students to have the ability to assimilate complex ideas from a variety of sources and apply them effectively to solve problems. To reinforce this essential skill, I typically design questions that guide students to think systematically, by breaking bigger problems to smaller sub-problems and building on the solution of one sub-problem to solve another sub-problem or a different problem.</li>
        </ul>
      </div>
    </>
  );
};

export default TeachingComponent;