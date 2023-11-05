import { FilmCard, TabType } from '../const';
import Overview from './overview';
import { SyntheticEvent, useState } from 'react';
import Details from './details';
import Reviews from './reviews';
import TabLink from './tab-link';
import { comments } from '../mocks/comments';

type TabsProps = {
  filmCard: FilmCard;
};
export default function Tabs({ filmCard }: TabsProps) {
  const [activeTab, setActiveTab] = useState(TabType.Overview);
  const tabs = {
    [TabType.Overview]: <Overview filmCard={filmCard} />,
    [TabType.Details]: <Details filmCard={filmCard} />,
    [TabType.Reviews]: <Reviews comments={comments} />,
  };
  const handleTabChange = (evt: SyntheticEvent) => {
    const targetId = evt.currentTarget.id as TabType;
    if (targetId) {
      setActiveTab(targetId);
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list" onClick={handleTabChange}>
          <TabLink
            tabType={TabType.Overview}
            activeTab={activeTab}
            onClick={handleTabChange}
          />
          <TabLink
            tabType={TabType.Details}
            activeTab={activeTab}
            onClick={handleTabChange}
          />
          <TabLink
            tabType={TabType.Reviews}
            activeTab={activeTab}
            onClick={handleTabChange}
          />
        </ul>
      </nav>
      {tabs[activeTab]}
    </div>
  );
}
