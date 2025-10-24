-- Add DELETE policy to prevent deletion of contact submissions
-- This policy denies all deletion attempts to preserve contact form data
CREATE POLICY "Prevent deletion of contact submissions"
ON public.contact_submissions
FOR DELETE
USING (false);