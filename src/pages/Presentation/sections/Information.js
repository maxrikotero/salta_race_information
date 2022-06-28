/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import { db, getDocs, collection } from "../../../firebase.js";
import { useEffect, useState } from "react";

function Information() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newArray = [];
      const querySnapshot = await getDocs(collection(db, "races"));

      querySnapshot.forEach((doc) => {
        console.log(doc);
        newArray.push(doc.data());
      });

      setRaces(newArray);
    };

    fetchData();
    // db.collection("comments").onSnapshot((snapshot) => {
    //   // Every time a new post is added this code fires
    //   console.log(snapshot.docs);
    //   // setComments(
    //   //   snapshot.docs.map((doc) => ({
    //   //     id: doc.id,
    //   //     ...doc.data()
    //   //   }))
    //   // );
    // });
  }, []);

  // if (races.length === 0) return null;
  console.log(races);
  return (
    <>
      {races?.map((item) => (
        <MKBox component="section" py={6} my={6}>
          <Container>
            <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
              <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
                <RotatingCard>
                  <RotatingCardFront image={item.image} title={<>{item.name}</>} />
                </RotatingCard>
              </Grid>
              <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
                <Grid container spacing={3}>
                  {item.details?.map((it) => (
                    <Grid item xs={12} md={6}>
                      <DefaultInfoCard
                        icon="content_copy"
                        title={it.distance}
                        description={it.price}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      ))}
    </>
  );
}

export default Information;
