"use client";
import React from "react";
import { Accordion, Column, Media, Row, Text } from "@once-ui-system/core";
import type { Experience } from "@/types";

interface WorkExperienceProps {
  experience: Experience;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experience }) => {
  return (
    <Column fillWidth>
      <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
        <Text id={experience.company} variant="heading-strong-l">
          {experience.company}
        </Text>
        <Text variant="heading-default-xs" onBackground="neutral-weak">
          {experience.timeframe}
        </Text>
      </Row>
      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
        {experience.role}
      </Text>
      {experience.responsibilities &&
        experience.responsibilities.length > 0 &&
        experience.responsibilities.map((responsibility, responsibilityIndex) => (
          <React.Fragment
            key={`${experience.company}-${experience.role}-${responsibility.type}-${responsibilityIndex}`}
          >
            <Accordion
              title={
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {responsibility.type}
                </Text>
              }
            >
              <Column as="ul" gap="16">
                {responsibility.tasks.map((task, taskIndex: number) => (
                  <Text
                    as="li"
                    variant="body-default-s"
                    key={`${experience.company}-${experience.role}-${responsibility.type}-task-${taskIndex}`}
                  >
                    {task}
                  </Text>
                ))}
              </Column>
            </Accordion>
          </React.Fragment>
        ))}

      {experience.images && experience.images.length > 0 && (
        <Row paddingTop="m" paddingLeft="40" gap="16" wrap center>
          {experience.images.map((image, imgIndex) => (
            <Column flex="1" key={imgIndex} center maxWidth={image.width} maxHeight={image.height}>
              <Media
                enlarge
                border="neutral-medium"
                radius="m"
                objectFit="contain"
                aspectRatio={`${image.width}/${image.height}`}
                alt={image.alt}
                caption={image.alt}
                src={image.src}
              />
            </Column>
          ))}
        </Row>
      )}
    </Column>
  );
};

export default WorkExperience;
