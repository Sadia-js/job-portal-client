import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/jobApply/JobApply";
import PrivateRoute from "./PrivateRoute";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs/:id",
        element: <PrivateRoute>
          <JobDetails></JobDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>
      },
      {
        path: "/myApplications",
        element: <PrivateRoute>
          <MyApplications></MyApplications>
        </PrivateRoute>
      },
      {
        path: "/addJob",
        element: <PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute>
      },
      {
        path: "/myPostedJobs",
        element: <PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>
      },
      {
        path: "/viewApplications/:job_id",
        element: <PrivateRoute>
          <ViewApplications></ViewApplications>
        </PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
    ]
  },
]);

export default router;