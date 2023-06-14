import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ChangePasswordPage({ isAuthenticated }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmNewPasswordVisible, setIsConfirmNewPasswordVisible] =
    useState(false);
  const toast = useToast();

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleToggleOldPasswordVisibility = () => {
    setIsOldPasswordVisible(!isOldPasswordVisible);
  };

  const handleToggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };

  const handleToggleConfirmNewPasswordVisibility = () => {
    setIsConfirmNewPasswordVisible(!isConfirmNewPasswordVisible);
  };

  const handleChangePasswordSubmit = (event) => {
    event.preventDefault();
    // Implement your change password logic here
    setIsPasswordChanged(true);
    toast({
      title: "Password changed successfully!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!isPasswordChanged) {
    return (
      <Box px={6} py={4}>
        <Heading as="h1" size="xl" mb={4}>
          Change Password
        </Heading>
        <Box as="form" onSubmit={handleChangePasswordSubmit}>
          <FormControl id="oldPassword" mb={4}>
            <FormLabel>Old Password</FormLabel>
            <InputGroup size="md">
              <Input
                type={isOldPasswordVisible ? "text" : "password"}
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />
              <InputRightElement>
                <IconButton
                  aria-label={
                    isOldPasswordVisible ? "Hide password" : "Show password"
                  }
                  icon={isOldPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  onClick={handleToggleOldPasswordVisibility}
                  variant="ghost"
                  size="sm"
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="newPassword" mb={4}>
            <FormLabel>New Password</FormLabel>
            <InputGroup size="md">
              <Input
                type={isNewPasswordVisible ? "text" : "password"}
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
              <InputRightElement>
                <IconButton
                  aria-label={
                    isNewPasswordVisible ? "Hide password" : "Show password"
                  }
                  icon={isNewPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  onClick={handleToggleNewPasswordVisibility}
                  variant="ghost"
                  size="sm"
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl id="confirmNewPassword" mb={4}>
            Confirm New Password
            <FormLabel>Confirm New Password</FormLabel>
            <InputGroup size="md">
              <Input
                type={isConfirmNewPasswordVisible ? "text" : "password"}
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
                required
              />
              <InputRightElement>
                <IconButton
                  aria-label={
                    isConfirmNewPasswordVisible
                      ? "Hide password"
                      : "Show password"
                  }
                  icon={
                    isConfirmNewPasswordVisible ? <FaEyeSlash /> : <FaEye />
                  }
                  onClick={handleToggleConfirmNewPasswordVisibility}
                  variant="ghost"
                  size="sm"
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button type="submit" size="sm" variant="outline">
            Change Password
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box px={6} py={4}>
      <Heading as="h1" size="xl" mb={4}>
        Password Changed Successfully!
      </Heading>
      <p>Your password has been successfully changed.</p>
    </Box>
  );
}

export default ChangePasswordPage;
