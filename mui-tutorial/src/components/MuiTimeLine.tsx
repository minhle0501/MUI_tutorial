import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";

const MuiTimeLine = () => {
  return (
  <Timeline position="alternate">
    <TimelineItem>
        <TimelineOppositeContent color="secondary">09:30AM</TimelineOppositeContent>
    <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined"/>
        <TimelineConnector/>
    </TimelineSeparator>
    <TimelineContent>
        City A
    </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent color="secondary">10:30AM</TimelineOppositeContent>
    <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined"/>
        <TimelineConnector/>
    </TimelineSeparator>
    <TimelineContent>
        City B
    </TimelineContent>
    </TimelineItem>

    <TimelineItem>
    <TimelineOppositeContent color="secondary">11:30AM</TimelineOppositeContent>
    <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined"/>
    </TimelineSeparator>
    <TimelineContent>
        City C
    </TimelineContent>
    </TimelineItem>
  </Timeline>
)
};

export default MuiTimeLine;
