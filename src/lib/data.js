import React from "react";
import { ReactComponent as IconWork } from "../assets/images/icon-work.svg";
import { ReactComponent as IconPlay } from "../assets/images/icon-play.svg";
import { ReactComponent as IconSelfCare } from "../assets/images/icon-self-care.svg";
import { ReactComponent as IconExercise } from "../assets/images/icon-exercise.svg";
import { ReactComponent as IconSocial } from "../assets/images/icon-social.svg";
import { ReactComponent as IconStudy } from "../assets/images/icon-study.svg";

export const buttons = [
  {
    "name": "Daily",
    "id": "daily"
  },
  {
    "name": "Weekly",
    "id": "weekly"
  },
  {
    "name": "Monthly",
    "id": "monthly"
  },
];

export const timeframeUnit = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

export const activities = [
  {
    "title": "Work",
    "color": "hsl(15, 100%, 70%)",
    "icon": React.createElement(IconWork),
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "color": "hsl(195, 74%, 62%)",
    "icon": React.createElement(IconPlay),
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "color": "hsl(348, 100%, 68%)",
    "icon": React.createElement(IconStudy),
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "color": "hsl(145, 58%, 55%)",
    "icon": React.createElement(IconExercise),
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "color": "hsl(264, 64%, 52%)",
    "icon": React.createElement(IconSocial),
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "color": "hsl(43, 84%, 65%)",
    "icon": React.createElement(IconSelfCare),
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];