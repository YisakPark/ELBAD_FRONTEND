import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SideBar = ({
  user_type,
  my_campaign,
  favorite_campign_creator,
  edit_account,
  create_campaign,
  get_youtube_channel,
  buy_point
}) => {
  return (
    <div className="panel panel-default sidebar-menu with-icons">
      <div className="panel-heading">
        <h3 className="h4 panel-title">마이 페이지</h3>
      </div>
      <div className="panel-body">
        <ul className="nav nav-pills flex-column text-sm">
          <li className="nav-item">
            <a
              href="template-accordions.html"
              className={classnames("nav-link", { active: my_campaign })}
            >
              내 캠페인
            </a>
          </li>
          <li className="nav-item">
            <a
              href="template-alerts.html"
              className={classnames("nav-link", {
                active: favorite_campign_creator
              })}
            >
              관심 캠페인/크리에이터
            </a>
          </li>
          <li className="nav-item">
            <a
              href="template-buttons.html"
              className={classnames("nav-link", { active: edit_account })}
            >
              내 정보 수정
            </a>
          </li>
          {user_type === "advertiser" && (
            <li className="nav-item">
              <a
                href="template-content-boxes.html"
                className={classnames("nav-link", { active: create_campaign })}
              >
                캠페인 만들기
              </a>
            </li>
          )}
          {user_type === "creator" && (
            <li className="nav-item">
              <a
                href="template-blocks.html"
                className={classnames("nav-link", {
                  active: get_youtube_channel
                })}
              >
                유투브 채널 정보 불러오기
              </a>
            </li>
          )}
          <li className="nav-item">
            <a
              href="template-pagination.html"
              className={classnames("nav-link", { active: buy_point })}
            >
              포인트 충전
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  user_type: PropTypes.string.isRequired,
  my_campaign: PropTypes.bool,
  favorite_campign_creator: PropTypes.bool,
  edit_account: PropTypes.bool,
  create_campaign: PropTypes.bool,
  get_youtube_channel: PropTypes.bool,
  buy_point: PropTypes.bool
};

SideBar.defaultProps = {
  my_campaign: false,
  favorite_campign_creator: false,
  edit_account: false,
  create_campaign: false,
  get_youtube_channel: false,
  buy_point: false
};

export default SideBar;
