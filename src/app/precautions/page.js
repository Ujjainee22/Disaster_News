import styles from "@/app/precautions/styles.module.css";
import Footer from "@/app/components/footer"

export default function Page() {
  return (
  <>
    <div className={styles.imageBackground}>
      
      <div className={styles.textContent}>
        <h1>BE PREPARED :</h1>
        <h2>STAY SAFE DURING NATURAL DISASTERS</h2>
      </div>
      <div className={styles.listContainer}>
      <ul>
        <li><b><u>Stay Informed</u> :</b> Keep track of weather updates and emergency alerts through news sources and official disaster management apps.</li>
        <li><b><u>Emergency Kit</u> :</b> Always have a survival kit with essentials like water, non-perishable food, flashlight, batteries, first-aid supplies, and important documents.</li>
        <li><b><u>Evacuation Plan</u> :</b> Familiarize yourself with evacuation routes, emergency exits, and nearest shelters.</li>
        <li><b><u>Communication Plan</u> :</b> Ensure family members know how to contact each other in case of an emergency.</li>
        <li><b><u>Insurance Coverage</u> :</b> Have appropriate disaster insurance for your home, belongings, and health.</li>
        <li><b><u>Drills & Training</u> :</b> Participate in community drills and train yourself in CPR and first aid.
        </li>
      </ul>
    
      </div>


    <div className={styles.disasterContainer}>
          <div className={styles.disasterCard}>
            <div className={styles.disasterImage}>
              <img src="/ek.webp" alt="Earthquake" />
            </div>
            <div className={styles.disasterContent}>
              <p>Earthquake</p>
              <ol>
  <li>If Indoors:
    <ul>
      <li>Drop to your hands and knees.</li>
      <li>Take cover under a sturdy object like a table, bed, or study desk.</li>
      <li>Hold onto the object you are under until the shaking stops.</li>
      <li>Do not rush outside.</li>
      <li>Stay away from walls, doors, glass, and other items that could fall.</li>
    </ul>
  </li>
  
  <li>If Outdoors:
    <ul>
      <li>Move to an open area.</li>
      <li>Stay away from buildings, trees, wires, and streetlights.</li>
      <li>Drop to the ground and stay put until the shaking stops.</li>
    </ul>
  </li>

  <li>If in a Vehicle:
    <ul>
      <li>Pull over to a clear location and stay in your vehicle with the seatbelts on until the shaking stops.</li>
      <li>Do not stop under power lines or overpasses.</li>
    </ul>
  </li>
</ol>
 <a href="/" className={styles.downloadButton} download>Download Guidelines</a>
            </div>
          </div>

          <div className={styles.disasterCard}>
            <div className={styles.disasterImage}>
              <img src="/fl.webp" alt="Flood" />
            </div>
            <div className={styles.disasterContent}>
              <p>Flood</p>
              <ul>
                <li>Move immediately to higher ground or stay on high ground.</li>
                <li>Continue to check the media for emergency information.</li>
                <li>Follow instructions from public safety officials.</li>
                <li>If you must evacuate your home, take only the essential items.</li>
                <li>Do not walk through flowing water if travelling during a flood.</li>
              </ul>
              <a href="" className={styles.downloadButton} download>Download Guidelines</a>

            </div>
          </div>

          <div className={styles.disasterCard}>
            <div className={styles.disasterImage}>
              <img src="/fr.webp" alt="Fire" />
            </div>
            <div className={styles.disasterContent}>
              <p>Forest Fire</p>
              <ul>
                <li>Follow all local laws and regulations regarding open fires, campfires, and burning permits.</li>
                <li>If authorities advise you to evacuate or if your home is at immediate risk, leave immediately. </li>
                <li>If you are indoors, keep the doors and windows closed.</li>
                <li>Reduce physical activity and stay hydrated by drinking water. 
                </li>
                <li>Keep a flashlight with batteries, a mobile phone, and a water bottle readily available. </li>
                <li>Monitor local news and emergency alerts for updates and instructions. </li>
              </ul>
              <a href="" className={styles.downloadButton} download>Download Guidelines</a>

            </div>
          </div>
          <div className={styles.disasterCard}>
            <div className={styles.disasterImage}>
              <img src="/ls.jpg" alt="" />
            </div>
            <div className={styles.disasterContent}>
              <p>Landslide</p>
              <ul>
                <li>Follow evacuation orders and instructions from local authorities.</li>
                <li>Seek higher ground or move to an elevated position.</li>
                <li>Stay away from  steep slopes, cliffs or hillsides.</li>
                <li>Monitor the environment for signs of ground movement.</li>
                <li>Stay infromed throughlocal news updatesand emergency broadcasts.</li>
                <li>Do not approach or touch unstable structures and debris.</li>
              </ul>
            <a href="" className={styles.downloadButton} download>Download Guidelines</a>

            </div>

          </div>
        
          <div className={styles.disasterCard}>
            <div className={styles.disasterImage}>
              <img src="/dr.jpg" alt="" />
            </div>
            <div className={styles.disasterContent}>
              <p>Drought</p>
              <ul>
                <li>Reduce water consumption in all areas of your home and daily life.</li>
                <li>Reuse water from washing vegetables or rinsing dishes.</li>
                <li>Ensure food is stored properly to prevent spoilage, especially during hot weather.</li>
                <li>Avoid flushing the toilet unnecessarily.</li>
                <li>Have a supply of bottled water or other safe drinking water on hand.</li>
                <li>Install drip irrigation systems for efficient watering of lawns and gardens. 
                </li>

              </ul>
          
              <a href="" className={styles.downloadButton} download>Download Guidelines</a>

            </div>

          </div>
          
          <div className={styles.disasterCard}>
            <div className={styles.disasterImage}>
              <img src="/cy.jpg" alt="" />
            </div>
            <div className={styles.disasterContent}>
              <p>Cyclone</p>
              <ul>
                <li>Do not go outside unless absolutely necessary. 
                </li>
                <li>Turn off power, gas, and water if possible. 
                </li>
                <li>Do not use electrical appliances or telephones during a cyclone.</li>
                <li>Move to an interior room or a storm shelter, away from windows and glass doors. 
                </li>
                <li>Be aware of potential hazards like downed power lines and debris.
                </li>
              </ul>
              <a href="" className={styles.downloadButton} download>Download Guidelines</a>

            </div>

          </div>

    </div>
  </div>
  <Footer />
    </>
  );
}
