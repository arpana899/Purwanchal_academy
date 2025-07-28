from django.db import models

class PrincipalMessage(models.Model):
    message = models.TextField()

    def str(self):
        return f"Principal Message (id={self.id})"