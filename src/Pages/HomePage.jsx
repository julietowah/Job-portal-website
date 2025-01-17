import Hero from "../components/Hero"
import HomCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"
const HomePage = () => {
  return (
    <>
    <Hero />
    <HomCards />
    <JobListings isHome={true} />
    <ViewAllJobs />
    </>
  )
}
export default HomePage