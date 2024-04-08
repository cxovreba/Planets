import { useState } from "react";
import { Footer, Image, Button, PlanetInfo } from "../../components";
import JasonData from "../../data/data.json";
import { PlanetType } from "../../types";
import { Link } from "react-router-dom";
import geology from '../../assets/EarthImages/earthLast.png';
import styles from './Earth.module.css';

const EarthLast = () => {
  const [data] = useState<PlanetType[]>(JasonData);
  return (
    <div>
      {data
        .filter((item) => item.name === "Earth")
        .map((fact) => {
          return (
            <div className={styles.container}>
              <div className={styles.planetContainer}>
                <div className={styles.mobile}>
                  <Link to={"/Earth"}>
                    <Button
                      number={""}
                      linkName={"OVERVIEW"}
                      className={styles.mobileBtn}
                    />
                  </Link>
                  <Link to={"/Earth-structure"}>
                    <Button
                      number={""}
                      linkName={"STRUCTURE"}
                      className={styles.mobileBtn}
                    />
                  </Link>
                  <Link to={"/Earth-geology"}>
                    <Button
                      number={""}
                      linkName={"SURFACE"}
                      className={styles.mobileBtn}
                    />
                  </Link>
                </div>
                <div className={styles.imageContainer}>
                  <Image image={geology} className={styles.img} />
                </div>
                <div className={styles.infoContainer}>
                  <PlanetInfo
                    title={fact.name}
                    info={fact.geology.content}
                    tag={"Source : "}
                    link={fact.geology.source}
                    children={"Wikipedia"}
                  />
                  <div className={styles.desktop}>
                    <Link className={styles.overview} to={"/Earth"}>
                      <Button
                        number={"01"}
                        linkName={"OVERVIEW"}
                        className={styles.desktopBtn}
                      />
                    </Link>
                    <Link className={styles.structure} to={"/Earth-structure"}>
                      <Button
                        number={"02"}
                        linkName={"INTERNAL STRUCTURE"}
                        className={styles.desktopBtn}
                      />
                    </Link>
                    <Link className={styles.geology} to={"/Earth-geology"}>
                      <Button
                        number={"03"}
                        linkName={"SURFACE GEOLOGY"}
                        className={styles.desktopBtn}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <Footer
                rotationTime={"ROTATION TIME"}
                rotationStats={fact.rotation}
                revolutionTime={"REVOLUTION TIME"}
                revolutionStats={fact.revolution}
                radius={"RADIUS"}
                radiusStats={fact.radius}
                averageTempature={"AVERAGE TEMP."}
                tempatureStats={fact.temperature}
              />
            </div>
          );
        })}
    </div>
  );
};

export default EarthLast;
