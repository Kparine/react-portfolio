import { Link } from 'react-router';
import type { Route } from './+types/work';
import CaseStudyPage from '../ui/CaseStudyPage';
import Shell from '../ui/Shell';
import { findCaseStudy } from '../ui/content';
import { v2Meta } from '../ui/meta';
import { V2_HOME } from '../ui/paths';

export const meta: Route.MetaFunction = ({ params }) => {
  const study = findCaseStudy(params.slug);
  return study ? v2Meta(study.title, study.summary) : v2Meta('Not found', 'Case study not found.');
};

export default function Work({ params }: Route.ComponentProps) {
  const study = findCaseStudy(params.slug);
  if (study) return <CaseStudyPage study={study} />;
  return (
    <Shell>
      <div className="v2-page">
        <h1 className="v2-page-title">Case study not found</h1>
        <p className="v2-lede">
          <Link to={V2_HOME}>See all work</Link>
        </p>
      </div>
    </Shell>
  );
}
