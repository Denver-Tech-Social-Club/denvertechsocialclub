/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Text,
  ButtonGroup,
  HStack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  useRadioGroup,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePlausible } from "next-plausible";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { submitApplicationEntry } from "lib/helpers/airtable";

const membershipApplicationSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    sector: yup.string().required(),
    location: yup.string().required(),
    join_reason: yup.string().required(),
    social: yup.string(),
  })
  .required();

const requiredString = "This field is required.";

const MembershipApplication = () => {
  const plausible = usePlausible();
  const router = useRouter();

  const [formSubmitSuccess, setformSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(membershipApplicationSchema) });

  const onSubmit = async (formData) => {
    plausible("submitted membership application", {
      props: {
        ...formData,
      },
    });
    try {
      const data = await submitApplicationEntry(formData);
      setformSubmitSuccess(true);
      router.push("/membership-application-success");
    } catch (error) {
      console.error("FORM ERROR", error);
      setFormErrors(error);
    }
  };

  return (
    <Box paddingY="20">
      <NextSeo title="Membership Application" />
      <Box
        maxWidth="760px"
        marginX={{ base: "4", md: "auto" }}
        paddingY="12"
        paddingX={{ base: "4", md: "0" }}
        background="white"
        borderRadius="lg"
        fontFamily="sansSerif"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="on"
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "580px",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Heading size="xl" marginBottom="12">
            Membership Application
          </Heading>

          <Stack spacing="8">
            <FormControl isInvalid={errors.name} isRequired>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <Input
                id="name"
                {...register("name", { required: true })}
                autoComplete="name"
              />

              <FormErrorMessage>
                {errors.name && requiredString}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.pronouns}>
              <FormLabel htmlFor="pronouns">Pronouns (optional)</FormLabel>
              <Input {...register("pronouns")} />

              <FormErrorMessage>{errors.pronouns}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                {...register("email", { required: true })}
                autoComplete="email"
              />
              <FormHelperText mb="4">
                Your personal email, not a work/business one, ideally.
              </FormHelperText>

              <FormErrorMessage>
                {errors.email && requiredString}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.social}>
              <FormLabel htmlFor="social">
                Personal Website or Social Profiles
              </FormLabel>
              <FormHelperText my="2">
                👋 Hey! Fill in at least one of these. This is to verify that
                you&apos;re a person and active online. Saying none, leaving
                them all empty, or providing a business website will get you
                rejected.
              </FormHelperText>
              <InputGroup>
                <InputLeftAddon width="24" children="Website" />
                <Input
                  id="website"
                  {...register("website")}
                  type="url"
                  autoComplete="url"
                />
              </InputGroup>
              <FormHelperText mb="4">
                Your personal website, not a work/business one.
              </FormHelperText>

              <Stack spacing="1">
                <InputGroup>
                  <InputLeftAddon width="24" children="LinkedIn" />
                  <Input type="text" id="linkedin" {...register("linkedin")} />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon width="24" children="Meetup" />
                  <Input type="text" id="meetup" {...register("meetup")} />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon width="24" children="Discord" />
                  <Input type="text" id="discord" {...register("discord")} />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon width="24" children="Github" />
                  <Input type="text" id="github" {...register("github")} />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon width="24" children="Twitter" />
                  <Input type="text" id="twitter" {...register("twitter")} />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon width="24" children="Mastodon" />
                  <Input type="text" id="mastodon" {...register("mastodon")} />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon width="24" children="Intsagram" />
                  <Input
                    type="text"
                    id="instagram"
                    {...register("instagram")}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon width="24" children="Other" />
                  <Input
                    type="text"
                    id="social_other"
                    {...register("social_other")}
                  />
                </InputGroup>
              </Stack>
              <FormErrorMessage>{errors.social}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.sector} isRequired>
              <FormLabel htmlFor="sector">
                When it comes to the Tech Industry, what do you most closely
                align with?{" "}
              </FormLabel>
              <Controller
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioGroup onChange={field.onChange} value={field.value}>
                    <Stack spacing="4">
                      <Radio ref={field.ref} value="Development / Engineering">
                        Development / Engineering
                      </Radio>

                      <Radio ref={field.ref} value="Design / UX">
                        Design / UX
                      </Radio>

                      <Radio
                        ref={field.ref}
                        value="Product Management / Strategy"
                      >
                        Product Management / Strategy
                      </Radio>

                      <Radio ref={field.ref} value="Leadership / Management">
                        Leadership / Management
                      </Radio>

                      <Radio
                        ref={field.ref}
                        value="Student / Teacher / Education"
                      >
                        Student / Teacher / Education
                      </Radio>

                      <Radio ref={field.ref} value="Other">
                        Other
                      </Radio>
                    </Stack>
                  </RadioGroup>
                )}
                control={control}
                name="sector"
              />

              <FormErrorMessage>
                {errors.sector && requiredString}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.location} isRequired>
              <FormLabel htmlFor="location">
                Location in the Greater Denver Area
              </FormLabel>
              <Input
                {...register("location", { required: true })}
                autoComplete="address-level2"
              />

              <FormErrorMessage>{errors.location}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.join_reason} isRequired>
              <FormLabel htmlFor="join_reason">
                Why do you want to join us?
              </FormLabel>
              <FormHelperText my="2">
                Give us a good, thoughtful reason!
              </FormHelperText>
              <Textarea {...register("join_reason", { required: true })} />

              <FormErrorMessage>{errors.join_reason}</FormErrorMessage>
            </FormControl>

            <Text>
              By submitting you agree to engage in a kind, considerate and
              respectful manner with other community members, and to abide by
              our rules and code of conduct.
            </Text>

            {isSubmitting ? (
              <Button isLoading loadingText="Submitting" variant="outline">
                Submitting, please wait
              </Button>
            ) : (
              <Button disabled={false} type="submit" colorScheme="messenger">
                Apply for membership
              </Button>
            )}
            {formErrors.error && (
              <Box
                borderWidth={1}
                borderColor="red.500"
                padding="4"
                borderRadius="md"
                backgroundColor="red.100"
                color="red.900"
                textAlign="center"
              >
                <Heading>Shoot! There&apos;s an error</Heading>
                <Text font>
                  It&apos;s not you, it&apos;s us. We&apos;ve logged it and
                  we&apos;ll get to the bottom of it. You can try again in a
                  bit, or just email us directly and we&apos;ll follow up.
                </Text>
              </Box>
            )}
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default MembershipApplication;
