/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Post = ({ thumbnail, title, url }) => (
    // video info on table,
    // thumbnails should be imported from the video
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={thumbnail} name={title} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {title}
        </MDTypography>
        <MDTypography variant="caption">{url}</MDTypography>
      </MDBox>
    </MDBox>
    // TODO: check out MDBOx variants and features
  );

  const Category = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    // table headers
    columns: [
      { Header: "post_name", accessor: "post_name", width: "45%", align: "left" },
      { Header: "category", accessor: "category", align: "left" }, // define accessors
      { Header: "status", accessor: "status", align: "center" },
      { Header: "upload_date", accessor: "upload_date", align: "center" },
      { Header: "likes", accessor: "likes", align: "center" },
      { Header: "views", accessor: "views", align: "center" },
      { Header: "monetization", accessor: "monetization", align: "center" },
    ],

    rows: [
      // table entries/rows
      {
        post_name: (
          <Post thumbnail={team2} post_name="Welcome To My Channel" email="john@creative-tim.com" />
        ),
        function: <Category title="Original" description="Podcast" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
