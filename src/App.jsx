import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import MainLayout from "./Layouts/MainLayouts"
import JobsPage from "./Pages/JobsPage"
import NotFound from "./Pages/NotFound"
import JobPageone, {jobLoader} from "./Pages/JobPageone"
import AddJobPage from "./Pages/AddJobPage"
import EditJobPage from "./Pages/EditJobPage"


const App = () => {

// add new job
  const addjob = async (newjob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newjob),
    });
    return
  } ;
  // delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return
  } ;

  // update job 
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
        <Route path="/jobs/:id" element={<JobPageone deleteJob={deleteJob} />}  loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addjob} />} />
        <Route path="*" element={<NotFound />} />
        

      </Route>
    )
  );
  return <RouterProvider router={router} />
}
export default App