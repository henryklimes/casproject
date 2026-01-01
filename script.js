// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
        }
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Article Content
const articles = {
    'fake-news': {
        title: 'Understanding Fake News',
        content: `
            <h2>Understanding Fake News</h2>
            <p>Fake news refers to false or misleading information presented as news. It's designed to deceive readers, often for political or financial gain. Understanding fake news is crucial in today's digital landscape where information spreads rapidly.</p>
            
            <h3>What is Fake News?</h3>
            <p>Fake news can take several forms:</p>
            <ul>
                <li><strong>Completely fabricated stories</strong> - Stories with no basis in fact</li>
                <li><strong>Misleading headlines</strong> - Headlines that don't match the article content</li>
                <li><strong>Satire presented as fact</strong> - Humorous content mistaken for real news</li>
                <li><strong>Biased reporting</strong> - Information presented with a clear agenda</li>
                <li><strong>Outdated information</strong> - Old news presented as current events</li>
            </ul>
            
            <h3>How Fake News Spreads</h3>
            <p>Fake news spreads through various channels:</p>
            <ul>
                <li><strong>Social media algorithms</strong> - Platforms prioritize engaging content, which often includes sensational false stories</li>
                <li><strong>Echo chambers</strong> - People share information within like-minded groups</li>
                <li><strong>Viral sharing</strong> - Emotional content gets shared without verification</li>
                <li><strong>Bot networks</strong> - Automated accounts amplify false information</li>
            </ul>
            
            <h3>Why Fake News is Effective</h3>
            <p>Fake news exploits psychological biases:</p>
            <ul>
                <li><strong>Confirmation bias</strong> - People believe information that confirms existing beliefs</li>
                <li><strong>Emotional appeal</strong> - Strong emotions override critical thinking</li>
                <li><strong>Authority illusion</strong> - Fake news sites mimic legitimate news sources</li>
                <li><strong>Repetition effect</strong> - Repeated exposure increases perceived truth</li>
            </ul>
            
            <h3>Protecting Yourself</h3>
            <p>To avoid falling for fake news:</p>
            <ol>
                <li>Check the source credibility</li>
                <li>Verify information with multiple reliable sources</li>
                <li>Look for fact-checking labels</li>
                <li>Examine the URL and domain</li>
                <li>Check the publication date</li>
                <li>Be skeptical of emotional or sensational content</li>
            </ol>
        `
    },
    'deepfakes': {
        title: 'AI-Generated Deepfakes',
        content: `
            <h2>AI-Generated Deepfakes</h2>
            <p>Deepfakes are synthetic media created using artificial intelligence, particularly deep learning techniques. They can create highly realistic fake videos, images and audio that are increasingly difficult to distinguish from authentic content.</p>
            
            <h3>What Are Deepfakes?</h3>
            <p>Deepfakes use machine learning algorithms, specifically generative adversarial networks (GANs), to:</p>
            <ul>
                <li>Swap faces in videos</li>
                <li>Generate realistic human faces that don't exist</li>
                <li>Manipulate speech and create fake audio</li>
                <li>Alter facial expressions and movements</li>
            </ul>
            
            <h3>The Technology Behind Deepfakes</h3>
            <p>Deepfake technology works through:</p>
            <ul>
                <li><strong>Training data</strong> - AI models learn from thousands of images/videos of the target person</li>
                <li><strong>Neural networks</strong> - Complex algorithms that learn patterns and generate new content</li>
                <li><strong>Face mapping</strong> - Detailed analysis of facial features, expressions and movements</li>
                <li><strong>Real-time processing</strong> - Advanced systems can create deepfakes in real-time</li>
            </ul>
            
            <h3>How to Spot Deepfakes</h3>
            <p>Look for these warning signs:</p>
            <ul>
                <li><strong>Unnatural blinking</strong> - Irregular or missing blinks</li>
                <li><strong>Facial inconsistencies</strong> - Mismatched skin tones or lighting</li>
                <li><strong>Audio mismatches</strong> - Lip movements don't match speech</li>
                <li><strong>Unrealistic movements</strong> - Weird or unnatural head movements</li>
                <li><strong>Artifacts</strong> - Blurring or distortion around the face</li>
                <li><strong>Context clues</strong> - Does the content make sense? Is it from a reliable source?</li>
            </ul>
            
            <h3>The Impact of Deepfakes</h3>
            <p>Deepfakes pose serious risks:</p>
            <ul>
                <li><strong>Reputation damage</strong> - False videos can harm individuals' reputations</li>
                <li><strong>Political manipulation</strong> - Fake videos can influence elections</li>
                <li><strong>Financial fraud</strong> - Scammers use deepfakes for identity theft</li>
                <li><strong>Erosion of trust</strong> - Makes it harder to trust any media</li>
            </ul>
            
            <h3>Staying Safe</h3>
            <p>To protect yourself from deepfakes:</p>
            <ol>
                <li>Verify video sources through multiple channels</li>
                <li>Use reverse image/video search tools</li>
                <li>Check for official confirmations</li>
                <li>Be skeptical of sensational or unbelievable content</li>
                <li>Use deepfake detection tools when available</li>
            </ol>
        `
    },
    'evaluation': {
        title: 'Critical Evaluation Techniques',
        content: `
            <h2>Critical Evaluation Techniques</h2>
            <p>Developing strong critical evaluation skills is essential for navigating today's information landscape. These techniques help you assess the credibility, accuracy and reliability of online content.</p>
            
            <h3>The SIFT Method</h3>
            <p>SIFT is a four-step process for evaluating information:</p>
            <ol>
                <li><strong>Stop</strong> - Pause before sharing or believing information</li>
                <li><strong>Investigate the source</strong> - Learn about the author and publication</li>
                <li><strong>Find better coverage</strong> - Look for other sources covering the same topic</li>
                <li><strong>Trace claims</strong> - Follow claims back to their original source</li>
            </ol>
            
            <h3>Source Verification</h3>
            <p>When evaluating sources, consider:</p>
            <ul>
                <li><strong>Author credentials</strong> - What are their qualifications and expertise?</li>
                <li><strong>Publication reputation</strong> - Is the publisher known for accuracy?</li>
                <li><strong>Bias and agenda</strong> - Does the source have a clear bias or agenda?</li>
                <li><strong>Funding sources</strong> - Who funds the publication?</li>
                <li><strong>Editorial standards</strong> - Does the publication have fact-checking processes?</li>
            </ul>
            
            <h3>Fact-Checking Strategies</h3>
            <p>Effective fact-checking involves:</p>
            <ul>
                <li><strong>Cross-referencing</strong> - Check multiple independent sources</li>
                <li><strong>Using fact-checking sites</strong> - Consult Snopes, FactCheck.org, PolitiFact</li>
                <li><strong>Checking dates</strong> - Ensure information is current and relevant</li>
                <li><strong>Verifying images</strong> - Use reverse image search to verify photos</li>
                <li><strong>Examining URLs</strong> - Look for suspicious domain names or patterns</li>
            </ul>
            
            <h3>Identifying Bias</h3>
            <p>Recognize different types of bias:</p>
            <ul>
                <li><strong>Selection bias</strong> - Only presenting certain information</li>
                <li><strong>Confirmation bias</strong> - Favoring information that confirms beliefs</li>
                <li><strong>Framing bias</strong> - Presenting information in a particular way</li>
                <li><strong>Commercial bias</strong> - Influenced by advertising or sponsors</li>
            </ul>
            
            <h3>Practical Checklist</h3>
            <p>Before sharing or believing information, ask:</p>
            <ol>
                <li>Who created this content and why?</li>
                <li>What evidence supports these claims?</li>
                <li>What do other sources say about this?</li>
                <li>When was this published?</li>
                <li>Where does this information come from?</li>
                <li>How does this make me feel? (Emotional manipulation check)</li>
            </ol>
        `
    },
    'psychology': {
        title: 'Psychology of Misinformation',
        content: `
            <h2>Psychology of Misinformation</h2>
            <p>Understanding the psychological mechanisms behind misinformation helps us recognize why false information is so persuasive and why people believe and share it.</p>
            
            <h3>Cognitive Biases</h3>
            <p>Several cognitive biases make us vulnerable to misinformation:</p>
            <ul>
                <li><strong>Confirmation Bias</strong> - We favor information that confirms our existing beliefs</li>
                <li><strong>Availability Heuristic</strong> - We judge likelihood based on how easily we can recall examples</li>
                <li><strong>Anchoring Bias</strong> - We rely too heavily on the first piece of information we encounter</li>
                <li><strong>Dunning-Kruger Effect</strong> - People overestimate their knowledge in areas they know little about</li>
            </ul>
            
            <h3>Emotional Manipulation</h3>
            <p>Misinformation often exploits emotions:</p>
            <ul>
                <li><strong>Fear</strong> - Creates urgency and bypasses rational thinking</li>
                <li><strong>Anger</strong> - Increases engagement and sharing</li>
                <li><strong>Outrage</strong> - Triggers strong emotional responses</li>
                <li><strong>Hope</strong> - Offers simple solutions to complex problems</li>
            </ul>
            
            <h3>Social Factors</h3>
            <p>Social dynamics contribute to misinformation spread:</p>
            <ul>
                <li><strong>Social proof</strong> - We trust information shared by people we know</li>
                <li><strong>Echo chambers</strong> - We're surrounded by like-minded people</li>
                <li><strong>Identity protection</strong> - We defend information that aligns with our identity</li>
                <li><strong>FOMO (Fear of Missing Out)</strong> - Pressure to share quickly</li>
            </ul>
            
            <h3>Why We Share False Information</h3>
            <p>People share misinformation for various reasons:</p>
            <ul>
                <li>Wanting to help others with "important" information</li>
                <li>Seeking social validation and engagement</li>
                <li>Not taking time to verify before sharing</li>
                <li>Believing information that aligns with their worldview</li>
                <li>Lacking media literacy skills</li>
            </ul>
            
            <h3>Building Resistance</h3>
            <p>To resist misinformation:</p>
            <ol>
                <li>Recognize your own biases</li>
                <li>Pause before sharing</li>
                <li>Question emotional reactions</li>
                <li>Seek diverse perspectives</li>
                <li>Develop healthy skepticism</li>
                <li>Practice fact-checking regularly</li>
            </ol>
        `
    },
    'protection': {
        title: 'Protecting Yourself Online',
        content: `
            <h2>Protecting Yourself Online</h2>
            <p>Building strong defenses against misinformation requires developing good habits and using effective strategies. Here's how to protect yourself and others from false information.</p>
            
            <h3>Develop Healthy Skepticism</h3>
            <p>Healthy skepticism means:</p>
            <ul>
                <li>Questioning information, especially if it seems too good or too bad to be true</li>
                <li>Not accepting claims at face value</li>
                <li>Requiring evidence for extraordinary claims</li>
                <li>Being open to changing your mind with new evidence</li>
            </ul>
            
            <h3>Build Your Media Literacy Toolkit</h3>
            <p>Essential tools and resources:</p>
            <ul>
                <li><strong>Fact-checking websites</strong> - Snopes, FactCheck.org, PolitiFact, BBC Reality Check</li>
                <li><strong>Reverse image search</strong> - Google Images, TinEye</li>
                <li><strong>Browser extensions</strong> - NewsGuard, FactCheck.org extension</li>
                <li><strong>Reliable news sources</strong> - Build a list of trusted publications</li>
                <li><strong>Media literacy courses</strong> - Online courses and resources</li>
            </ul>
            
            <h3>Social Media Best Practices</h3>
            <p>When using social media:</p>
            <ul>
                <li>Follow diverse, credible sources</li>
                <li>Verify before sharing</li>
                <li>Check the date of posts</li>
                <li>Be aware of sponsored content</li>
                <li>Limit time in echo chambers</li>
                <li>Report false information when appropriate</li>
            </ul>
            
            <h3>Critical Thinking Habits</h3>
            <p>Develop these habits:</p>
            <ol>
                <li><strong>Pause and reflect</strong> - Don't react immediately to information</li>
                <li><strong>Ask questions</strong> - Who, what, when, where, why, how?</li>
                <li><strong>Check multiple sources</strong> - Don't rely on a single source</li>
                <li><strong>Consider the source</strong> - What's their agenda or bias?</li>
                <li><strong>Look for evidence</strong> - What proof supports these claims?</li>
            </ol>
            
            <h3>Teaching Others</h3>
            <p>Help protect your community:</p>
            <ul>
                <li>Share media literacy resources</li>
                <li>Gently correct misinformation when you see it</li>
                <li>Model good information habits</li>
                <li>Encourage fact-checking</li>
                <li>Discuss media literacy with friends and family</li>
            </ul>
            
            <h3>Staying Updated</h3>
            <p>Misinformation tactics evolve, so:</p>
            <ul>
                <li>Stay informed about new misinformation techniques</li>
                <li>Learn about emerging technologies (like deepfakes)</li>
                <li>Follow media literacy organizations</li>
                <li>Participate in media literacy communities</li>
            </ul>
        `
    },
    'democracy': {
        title: 'Impact on Democracy',
        content: `
            <h2>Impact on Democracy</h2>
            <p>Digital misinformation poses significant threats to democratic processes, public trust and informed decision-making. Understanding these impacts is crucial for protecting democratic institutions.</p>
            
            <h3>Threats to Democratic Processes</h3>
            <p>Misinformation affects democracy in several ways:</p>
            <ul>
                <li><strong>Election interference</strong> - False information can influence voting decisions</li>
                <li><strong>Polarization</strong> - Deepens divisions between different groups</li>
                <li><strong>Undermining trust</strong> - Erodes confidence in institutions and media</li>
                <li><strong>Manipulating public opinion</strong> - Shapes beliefs through false narratives</li>
            </ul>
            
            <h3>Impact on Decision-Making</h3>
            <p>False information affects:</p>
            <ul>
                <li><strong>Individual choices</strong> - People make decisions based on false information</li>
                <li><strong>Policy formation</strong> - Public pressure based on misinformation</li>
                <li><strong>Public health</strong> - False health information can be dangerous</li>
                <li><strong>Economic decisions</strong> - Misinformation affects markets and investments</li>
            </ul>
            
            <h3>Case Studies</h3>
            <p>Examples of misinformation's impact:</p>
            <ul>
                <li><strong>Election campaigns</strong> - False stories spread during elections worldwide</li>
                <li><strong>Social movements</strong> - False narratives used to divide communities</li>
                <li><strong>International relations</strong> - State-sponsored disinformation campaigns</li>
            </ul>
            
            <h3>Protecting Democracy</h3>
            <p>To safeguard democratic processes:</p>
            <ol>
                <li><strong>Promote media literacy</strong> - Educate citizens about misinformation</li>
                <li><strong>Encourage critical thinking</strong> - Teach evaluation skills in schools</li>
                <li><strong>Foster dialogue</strong> - Create spaces for respectful discussion</li>
                <li><strong>Transparency</strong> - Make information sources clear and verifiable</li>
            </ol>
            
            <h3>Your Role as a Citizen</h3>
            <p>Every citizen can help:</p>
            <ul>
                <li>Verify information before sharing</li>
                <li>Support reliable news sources</li>
                <li>Engage in informed political discourse</li>
                <li>Vote based on verified information</li>
                <li>Hold leaders accountable for spreading misinformation</li>
            </ul>
        `
    }
};

// Visual Guides Content
const visualGuides = {
    'red-flags': {
        title: 'Red Flags of Misinformation',
        content: `
            <h2>Red Flags of Misinformation</h2>
            <p>Use this visual checklist to quickly identify potential misinformation:</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h3 style="color: #92400e; margin-bottom: 0.5rem;">🚩 Extreme Emotions</h3>
                    <p style="color: #78350f;">Content designed to make you feel angry, scared or outraged</p>
                </div>
                
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h3 style="color: #92400e; margin-bottom: 0.5rem;">🚩 Too Perfect</h3>
                    <p style="color: #78350f;">Claims that seem too good or too bad to be true</p>
                </div>
                
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h3 style="color: #92400e; margin-bottom: 0.5rem;">🚩 No Sources</h3>
                    <p style="color: #78350f;">Missing citations, links or verifiable references</p>
                </div>
                
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h3 style="color: #92400e; margin-bottom: 0.5rem;">🚩 Urgency Pressure</h3>
                    <p style="color: #78350f;">"Act now" or "Limited time" messaging</p>
                </div>
                
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h3 style="color: #92400e; margin-bottom: 0.5rem;">🚩 Conspiracy Claims</h3>
                    <p style="color: #78350f;">References to secret plots or cover-ups</p>
                </div>
                
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h3 style="color: #92400e; margin-bottom: 0.5rem;">🚩 Poor Quality</h3>
                    <p style="color: #78350f;">Multiple spelling errors or awkward writing</p>
                </div>
            </div>
            
            <h3>Quick Decision List</h3>
            <div style="background: #f3f4f6; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0;">
                <p><strong>Ask yourself:</strong></p>
                <ol style="line-height: 2;">
                    <li>Does this make me feel extremely emotional? → <span style="color: #ef4444;">RED FLAG</span></li>
                    <li>Can I verify this with other sources? → If NO: <span style="color: #ef4444;">RED FLAG</span></li>
                    <li>Is the source credible? → If NO: <span style="color: #ef4444;">RED FLAG</span></li>
                    <li>Does this seem too perfect? → If YES: <span style="color: #ef4444;">RED FLAG</span></li>
                    <li>Am I being pressured to act quickly? → If YES: <span style="color: #ef4444;">RED FLAG</span></li>
                </ol>
            </div>
        `
    },
    'deepfake-detection': {
        title: 'Deepfake Detection Guide',
        content: `
            <h2>Deepfake Detection Guide</h2>
            <p>Learn to identify AI-generated fake videos and images with these visual indicators:</p>
            
            <h3>Visual Warning Signs</h3>
            <div style="display: grid; gap: 1.5rem; margin: 2rem 0;">
                <div style="background: #dbeafe; padding: 1.5rem; border-radius: 0.5rem;">
                    <h4 style="color: #1e40af; margin-bottom: 0.5rem;">👁️ Unnatural Blinking</h4>
                    <p>Real people blink regularly (15-20 times per minute). Deepfakes often have irregular or missing blinks.</p>
                </div>
                
                <div style="background: #dbeafe; padding: 1.5rem; border-radius: 0.5rem;">
                    <h4 style="color: #1e40af; margin-bottom: 0.5rem;">👄 Lip Sync Issues</h4>
                    <p>Audio and lip movements may not match perfectly. Watch for delays or misalignments.</p>
                </div>
                
                <div style="background: #dbeafe; padding: 1.5rem; border-radius: 0.5rem;">
                    <h4 style="color: #1e40af; margin-bottom: 0.5rem;">🔄 Unnatural Movements</h4>
                    <p>Weird head movements, unrealistic facial expressions or movements that don't match speech patterns.</p>
                </div>
            </div>
            
            <h3>Detection Checklist</h3>
            <div style="background: #f3f4f6; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0;">
                <p><strong>When evaluating a video:</strong></p>
                <ul style="line-height: 2;">
                    <li>✓ Watch the eyes - do they blink naturally?</li>
                    <li>✓ Check lighting - is it consistent?</li>
                    <li>✓ Listen carefully - do lips match speech?</li>
                    <li>✓ Look for artifacts - any blurring or distortion?</li>
                    <li>✓ Verify the source - where did this come from?</li>
                    <li>✓ Check context - does this make sense?</li>
                </ul>
            </div>
            
            <h3>Tools for Detection</h3>
            <ul style="line-height: 2;">
                <li>Reverse video search (Google, Yandex)</li>
                <li>Deepfake detection software (when available)</li>
                <li>Official source verification</li>
                <li>Cross-reference with other media</li>
            </ul>
        `
    },
    'source-verification': {
        title: 'Source Verification Process',
        content: `
            <h2>Source Verification Process</h2>
            <p>Follow this step-by-step process to verify information sources:</p>
            
            <div style="background: #ecfdf5; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #10b981;">
                <h3 style="color: #065f46; margin-bottom: 1rem;">Step 1: Identify the Source</h3>
                <p>Who created this content? What organization or individual is responsible?</p>
            </div>
            
            <div style="background: #ecfdf5; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #10b981;">
                <h3 style="color: #065f46; margin-bottom: 1rem;">Step 2: Check Credibility</h3>
                <ul style="line-height: 2;">
                    <li>What are the author's credentials?</li>
                    <li>Is the publication reputable?</li>
                    <li>What is their track record for accuracy?</li>
                    <li>Do they have fact-checking processes?</li>
                </ul>
            </div>
            
            <div style="background: #ecfdf5; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #10b981;">
                <h3 style="color: #065f46; margin-bottom: 1rem;">Step 3: Examine the URL</h3>
                <ul style="line-height: 2;">
                    <li>Does the domain look legitimate?</li>
                    <li>Watch for misspellings (e.g., "cnn.com" vs "cnn.co")</li>
                    <li>Check for suspicious patterns</li>
                    <li>Verify the domain registration</li>
                </ul>
            </div>
            
            <div style="background: #ecfdf5; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #10b981;">
                <h3 style="color: #065f46; margin-bottom: 1rem;">Step 4: Cross-Reference</h3>
                <p>Find other sources covering the same topic:</p>
                <ul style="line-height: 2;">
                    <li>Do multiple reliable sources report this?</li>
                    <li>Are the facts consistent across sources?</li>
                    <li>What do fact-checking sites say?</li>
                </ul>
            </div>
            
            <div style="background: #ecfdf5; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #10b981;">
                <h3 style="color: #065f46; margin-bottom: 1rem;">Step 5: Check the Date</h3>
                <p>When was this published? Is the information current or outdated?</p>
            </div>
            
            <div style="background: #ecfdf5; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0; border-left: 4px solid #10b981;">
                <h3 style="color: #065f46; margin-bottom: 1rem;">Step 6: Evaluate Bias</h3>
                <p>Does the source have a clear agenda or bias? How does this affect the information presented?</p>
            </div>
            
            <h3>Quick Verification Checklist</h3>
            <div style="background: #f3f4f6; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0;">
                <p>✓ Source is credible and well-known</p>
                <p>✓ Author has relevant expertise</p>
                <p>✓ Information is current</p>
                <p>✓ Multiple sources confirm the information</p>
                <p>✓ No obvious bias or agenda</p>
                <p>✓ Claims are supported by evidence</p>
            </div>
        `
    },
    'bias-detection': {
        title: 'Identifying Bias',
        content: `
            <h2>Identifying Bias in Media</h2>
            <p>Understanding different types of bias helps you evaluate information more critically:</p>
            
            <h3>Types of Media Bias</h3>
            <div style="display: grid; gap: 1.5rem; margin: 2rem 0;">
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h4 style="color: #92400e; margin-bottom: 0.5rem;">⚖️ Selection Bias</h4>
                    <p>Only presenting certain information while omitting other relevant facts. The story is incomplete.</p>
                </div>
                
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h4 style="color: #92400e; margin-bottom: 0.5rem;">⚖️ Framing Bias</h4>
                    <p>Presenting information in a particular way that influences how it's interpreted. The same facts can tell different stories.</p>
                </div>
                
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h4 style="color: #92400e; margin-bottom: 0.5rem;">⚖️ Confirmation Bias</h4>
                    <p>Favoring information that confirms existing beliefs while ignoring contradictory evidence.</p>
                </div>
                
                <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                    <h4 style="color: #92400e; margin-bottom: 0.5rem;">⚖️ Commercial Bias</h4>
                    <p>Content influenced by advertisers, sponsors or financial interests rather than objective reporting.</p>
                </div>
            </div>
            
            <h3>How to Detect Bias</h3>
            <div style="background: #f3f4f6; padding: 2rem; border-radius: 0.5rem; margin: 2rem 0;">
                <p><strong>Ask these questions:</strong></p>
                <ul style="line-height: 2;">
                    <li>What perspective is being emphasized?</li>
                    <li>What information is missing?</li>
                    <li>What language is used? (Emotional vs. neutral)</li>
                    <li>Who is quoted and who isn't?</li>
                    <li>What's the source's funding or ownership?</li>
                    <li>How does this compare to other sources?</li>
                </ul>
            </div>
            
            <h3>Best Practices</h3>
            <ul style="line-height: 2;">
                <li>Read multiple sources with different perspectives</li>
                <li>Look for primary sources when possible</li>
                <li>Be aware of your own biases</li>
                <li>Question emotional language</li>
                <li>Check what's being omitted</li>
            </ul>
        `
    }
};

// Open Article Modal
function openArticle(articleId) {
    const article = articles[articleId];
    if (article) {
        const modal = document.getElementById('articleModal');
        const modalContent = modal.querySelector('.modal-content');
        document.getElementById('articleContent').innerHTML = article.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Reset scroll position to top
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }
}

// Open Visual Guide Modal
function openVisualGuide(guideId) {
    const guide = visualGuides[guideId];
    if (guide) {
        const modal = document.getElementById('visualModal');
        const modalContent = modal.querySelector('.modal-content');
        document.getElementById('visualContent').innerHTML = `<div class="visual-guide-content">${guide.content}</div>`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Reset scroll position to top
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }
}

// Close Modals
function closeModal() {
    const modal = document.getElementById('articleModal');
    const modalContent = modal.querySelector('.modal-content');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Reset scroll position
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}

function closeVisualModal() {
    const modal = document.getElementById('visualModal');
    const modalContent = modal.querySelector('.modal-content');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Reset scroll position
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const articleModal = document.getElementById('articleModal');
    const visualModal = document.getElementById('visualModal');
    if (event.target === articleModal) {
        closeModal();
    }
    if (event.target === visualModal) {
        closeVisualModal();
    }
}

// Reset Checklist
function resetChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Counting Animation Function
function animateCounter(element, target, duration = 1000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '%';
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((statEl, index) => {
                const text = statEl.textContent;
                const number = parseInt(text.replace('%', ''));
                if (number && !statEl.dataset.animated) {
                    statEl.dataset.animated = 'true';
                    // Add appearance animation with staggered delay
                    setTimeout(() => {
                        statEl.classList.add('animate-in');
                        statEl.textContent = '0%';
                        // Start counting after appearance animation
                        setTimeout(() => {
                            animateCounter(statEl, number, 1000);
                        }, 200);
                    }, index * 100); // Stagger each number by 100ms
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.article-card, .visual-card, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Observe hero stats for counting animation
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        // Check if stats are already visible (at top of page)
        const rect = heroStats.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            // Start animation immediately if already visible
            const statNumbers = heroStats.querySelectorAll('.stat-number');
            statNumbers.forEach((statEl, index) => {
                const text = statEl.textContent;
                const number = parseInt(text.replace('%', ''));
                if (number) {
                    // Add appearance animation with staggered delay
                    setTimeout(() => {
                        statEl.classList.add('animate-in');
                        statEl.textContent = '0%';
                        // Start counting after appearance animation
                        setTimeout(() => {
                            animateCounter(statEl, number, 1000);
                        }, 200);
                    }, index * 100 + 300); // Stagger each number by 100ms with initial delay
                }
            });
        } else {
            // Observe for when it comes into view
            statsObserver.observe(heroStats);
        }
    }
});

